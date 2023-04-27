window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});




// Этот код добавляет слушатель событий на объект окна, который ожидает завершения загрузки страницы. Когда страница загружена, он выбирает новую форму задачи, поле ввода и список элементов из HTML-документа. Затем он добавляет слушатель событий на форму, который ожидает ее отправки.

// Когда форма отправляется, код предотвращает стандартное поведение отправки формы и извлекает значение поля ввода. Он создает новый элемент HTML с содержимым задачи, кнопками редактирования и удаления и добавляет его в список задач.

// Он также добавляет слушатели событий на кнопки редактирования и удаления. Когда кнопка редактирования нажата, она изменяет свой текст на «Сохранить», удаляет атрибут "readonly" из поля ввода и устанавливает фокус на нем, позволяя пользователю редактировать содержимое задачи. Когда кнопка снова нажата, она возвращается к своему исходному тексту и устанавливает поле ввода в режим только для чтения.

// Когда кнопка удаления нажата, она удаляет элемент задачи из списка задач.