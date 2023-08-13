// let header = document.createElement('h1');

// header.textContent = 'Dynamic Heading';

// // create a paragraph html element
// let paragraph = document.createElement('p');

// // set the content of the paragraph element
// paragraph.textContent = 'This is a dynamically created paragraph element';

// // append the paragraph element to the html body
// // document.body.appendChild(paragraph);

// // document.getElementById('firstDiv').append(header, paragraph);

// // create a div
// let firstDiv = document.createElement('div');

// firstDiv.append(header, paragraph);

// document.body.append(firstDiv);

// create an anchor element
// let link = document.createElement('a');

// // set the attribute
// link.href = 'https://www.google.com'

// link.textContent = 'visit google.com'

// document.getElementById('secondDiv').appendChild(link);

// let googlelogo = document.createElement('img');

// // googlelogo.src = './Google-logo.png';

// googlelogo.setAttribute('src', './Google-logo.png');
// googlelogo.setAttribute('alt', 'google logo');

// googlelogo.id = 'google-logo';
// googlelogo.className = 'logo';

// // googlelogo.width = 200;
// googlelogo.style.width = '200px';

// document.getElementById('secondDiv').appendChild(googlelogo);

// Create a new '<a>' (anchor) element and set its 'href' attribute to 'https://www.google.com' and its 'target' attribute to "_blank". Append the anchor element to a '<p>' element

// let anchorElement = document.createElement('a');

// anchorElement.setAttribute('href', 'https://www.google.com');

// anchorElement.setAttribute('target', '_blank');
// anchorElement.textContent = 'visit google.com';

// // document.getElementById('paragraph').appendChild(anchorElement);

// let paragraph = document.createElement('p');

// paragraph.appendChild(anchorElement);

// document.body.appendChild(paragraph);

// Create a new '<ul>' element and append three '<li>' elements with the text "Item 1", "Item 2", and "Item 3" to it. Then, append the '<ul>' element to a '<div>' with the ID 'listContainer'

// let list = document.createElement('ul');

// let listItem = document.createElement('li');
// listItem.textContent = 'Item 1';
// list.appendChild(listItem);

// listItem = document.createElement('li');
// listItem.textContent = 'Item 2';
// list.appendChild(listItem);

// listItem = document.createElement('li');
// listItem.textContent = 'Item 3';
// list.appendChild(listItem);

// document.getElementById('listContainer').appendChild(list);

// let listItems = ['Coffee', 'Tea', 'Green Tea', 'Black Coffee'];

// let list = document.createElement('ol');

// listItems.forEach(data => {
//     let listItem = document.createElement('li');

//     listItem.textContent = data;

//     list.appendChild(listItem);
// });

// document.getElementById('listContainer').appendChild(list);

// let listItems = ['Coffee', 'Tea', 'Green Tea', 'Black Coffee'];

// let list = '<ul>';

// listItems.forEach(item => {
//     list += '<li>' + item + '</li>';
// });

// list += '</ul>';

// document.getElementById('listContainer').innerHTML = list;

// let highlightedElements = document.getElementsByClassName('highlight');

// for (let index = 0; index < highlightedElements.length; index++){
//     highlightedElements[index].style.backgroundColor = 'red';
// }

// let paragraphs = document.getElementsByTagName('p');

// console.log(paragraphs[2]);

// let paragraphs = document.querySelectorAll('.highlight');

// console.log(paragraphs[1]);

// let paragraph = document.querySelector('#paragraph');

// console.log(paragraph);

// document.getElementById('container').innerText = 'this is inside the div';

// document.getElementById('container').innerHTML = '<b>this is inside the div</b>';

let form = document.createElement('form');

let emailInput = document.createElement('input');

emailInput.setAttribute('type', 'email');

form.appendChild(emailInput);

let submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

form.appendChild(submitButton);

console.log(form);