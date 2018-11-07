
import { HTTPService } from "../scripts/http-service";

const BTN_DEL_CLASS_NAME = 'btn_del';
const CHACKBOX_CLASS_NAME = 'list__checkbox';
const TITLE_ATTR = 'author';
const LIST_ITEM_TEMPLATE = `
  <input type="checkbox" {{isChecked}} class="${CHACKBOX_CLASS_NAME}"/>
  <span data-name="${TITLE_ATTR + TEXT}">{{author}}</span>
  <button type="button" class="${BTN_DEL_CLASS_NAME}">DELETE</button>`;
const URL = ' https://evening-dawn-11092.herokuapp.com/comments ';
const TASK_ID_PREFIX = 'taskID';
const TEXT = 'textarea';

export class TaskList {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.httpService = new HTTPService()
    this.render();
    this.getList();
  }

  getList() {
    this.httpService.get(URL, (response) => this.renderList(response));
  }

  render() {
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.textarea = document.createElement('textarea');
    this.submitBtn = document.createElement('button');
    this.submitBtn.textContent = 'Add';
   
    this.form.classList.add('taskList__form');
    this.input.classList.add('taskList__input');
    this.textarea.classList.add('taskList__textarea');
    this.submitBtn.classList.add('taskList__Btn');

    this.form.appendChild(this.input);
    this.form.appendChild(this.textarea);
    this.form.appendChild(this.submitBtn);
    this.form.addEventListener('submit', (e) => this.onSubmit(e));

    this.rootElement.appendChild(this.form);
  }

  onSubmit(e) {
    e.preventDefault();
    const author = this.input.value;
    const coment = this.textarea.value;
    this.input.value = '';
    this.textarea.value = '';

    this.httpService.post(URL, {author, coment}, (task) => {
      this.list.appendChild(this.renderOne(task));
    });
  }

  updateItem(taskId) {
    const replacedElement = this.list.querySelector(`#${TASK_ID_PREFIX + taskId}`);
    const id = taskId;
    const author = replacedElement.querySelector(`[data-name*=${TITLE_ATTR + TEXT}]`).textContent;
    const completed = replacedElement.querySelector(`.${CHACKBOX_CLASS_NAME}`).getAttribute('checked') ? false : true;

    this.httpService.put(`${URL}/${taskId}`, {id, author, completed}, (task) => {
      const updateTask = this.renderOne(task);
  
      this.list.replaceChild(updateTask, replacedElement);
    });
  }

  deleteItem(taskId) {
    this.httpService.delete(`${URL}/${taskId}`, () => {
      const elementForRemove = this.list.querySelector(`#${TASK_ID_PREFIX + taskId}`);
      this.list.removeChild(elementForRemove);
    });
  }

  renderOne(task) {
    const li = document.createElement('li');
    li.id = TASK_ID_PREFIX + task.id;
    li.innerHTML = LIST_ITEM_TEMPLATE
      .replace('{{author}}', task.author)
      .replace('{{coment}}', task.coment)
      .replace('{{isChecked}}', task.completed ? 'checked' : '');

    return li
  }

  renderList(tasks) {
    this.list = document.createElement('ul');
    const fragment = document.createDocumentFragment();
    tasks.forEach((task) => {
      fragment.appendChild(this.renderOne(task));
    });

    this.list.appendChild(fragment);
    
    this.list.addEventListener('click', (e) => {
      if (e.target.classList.contains(BTN_DEL_CLASS_NAME)) {
        e.stopPropagation();
        const id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
        this.deleteItem(id);
      }
      if (e.target.classList.contains(CHACKBOX_CLASS_NAME)) {
        const id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
        this.updateItem(id)
      }
    })
    this.rootElement.appendChild(this.list);
  }
}