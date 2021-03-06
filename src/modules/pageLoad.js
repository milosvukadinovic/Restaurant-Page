import '../css/styles.css';
import {header} from './header';
import {menu} from './menu';
import {contact} from './contact';
import {about} from './about';

const pageLoad = () => {
  const body = document.getElementsByTagName('body')[0];
  const container = document.createElement('div');
  body.appendChild(header);
  body.appendChild(container);
  container.appendChild(contact);

  document.getElementById('menu').addEventListener('click', (event) => {
    menuAdd();
  });

  document.getElementById('contact').addEventListener('click', (event) => {
    contactAdd();
  });

  document.getElementById('about').addEventListener('click', (event) => {
    aboutAdd();
  });
  /**
    Deletes content in container
 */
  function deleteContent() {
    let child = container.lastElementChild;
    while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
    }
  }

  /**
    Adds menu to container
 */
  function menuAdd() {
    deleteContent();
    container.appendChild(menu);
  };

  /**
    Adds contact us to container
 */
  function contactAdd() {
    deleteContent();
    container.appendChild(contact);
  };

  /**
    Adds about us to container
  */
  function aboutAdd() {
    deleteContent();
    container.appendChild(about);
  };
};

export {pageLoad};
