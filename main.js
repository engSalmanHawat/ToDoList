 window.onload=loadTasks;

function loadTasks(){
	if(localStorage.getItem("localStorageItems")==null) return;

	let tasks=Array.form(JSON.parse(localStorage.getItem("localStorageItems")));
}
window.addEventListener('load',(e) => {
	e.preventDefault();
	if (GetItems) {
			
		for (let i = 0; i < GetItems.length; i++) {
			GILS.value=GetItems[i];
			showList(GILS);
		}

		for (let i =0; i <GetItems.length; i++) {
			GILS.value=GetItems[i];
			localStorageItems(GILS);
	}
	

 }});

	var colorEl;
	var task1=document.querySelector(".task");
 	const clear2= document.querySelector(".clear");
	var form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	input.focus();
	var list_el = document.querySelector("#tasks");
	var clear = document.querySelector("#new-task-clear");
	const Items=[];
	const GILS=[];
	const GetItems=JSON.parse(localStorage.getItem("localStorageItems"));
	console.log(GetItems);
	

	window.addEventListener("submit", e => {
			e.preventDefault();
		if (input.value.trim()==="") {
			alert("hi you hav to enter items");
		}else{
			localStorageItems(input);
			showList(input);	
		}});	

//////////////////////////Function Add Items to Local Storage ///////////////////////////////
function localStorageItems(task_item){
	console.log(Items.length);
	let inputItem=task_item.value.trim();
	Items.push(inputItem);
	localStorage.setItem("localStorageItems",JSON.stringify(Items));
	inputItem.value="";
}
////////////////////////////////////////////////////////
//function for done
function colorDone(task_item){
	if (task_item.style.textDecoration==="line-through") {
		task_item.style.textDecoration="none";
		task_item.style.color="white";
		colorEl = task_item.style.color;
		console.log(colorEl);
	} else {
		task_item.style.textDecoration="line-through";
		task_item.style.color="blue";
		colorEl = task_item.style.color;
		console.log(colorEl);
		}
	};
////////////////////////////////////////////////////////
//clear all
clear2.addEventListener("click", function(element){
	localStorage.clear();
	// element.parentNode.parentNode.removeChild(element.parentNode);    
    // localStorage.removeItem(task1[element]);
	location.reload();
  		});
////////////////////////////////////////////////////////
function showList(task_item){
	var task = task_item.value;

		var task_el = document.createElement('div');
		task_el.classList.add('task');

		var task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		var task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		var task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		 task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerHTML = 'Done';

		var task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';


		var task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_done_el);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		

		task_el.appendChild(task_actions_el); 
		list_el.appendChild(task_el);

		input.value = '';
		input.focus();

		task_done_el.onclick=function(){
			var div =task_input_el ;
			colorDone(div);
			};	

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_edit_el.style.color="rgb(204, 201, 17)";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
				task_edit_el.style.color="green";
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
};