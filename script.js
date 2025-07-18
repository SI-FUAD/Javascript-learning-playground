// Declaring variables
let user_name = "Ali";
const user_age = 25;
let user_isStudent = true;
let user_address = null;
let user_phoneNumber;
let subjects = ["Maths", "Physics", "Chemistry", "Biology", "Accounting"];

// Console Log
console.log("Name:", user_name)
console.log("Age:", user_age)
console.log("Is he/she a student?:", user_isStudent)
console.log("Address:", user_address)
console.log("Phone Number:", user_phoneNumber)
console.log(`${user_name} is ${user_age} years old.`)

// Conditional Statements, Comparators and Logic
if (user_age >= 18 && user_isStudent) {
    console.log("Everything is alright!!");
} else if (user_age >= 18 || user_isStudent) {
    console.log("At least one error!!");
} else {
    console.log("Everything is wrong!!");
}

// Loops
for (let i = 5; i <= 15; i++) {
    console.log("Iteration:", i);
}

let j = 5;
while (j < 26) {
  console.log("Iteration:", j);
  j++;
}

for (let subject of subjects) {
    console.log(subject);
}

// Functions
function Greet(name) {
    console.log("Hello,", name)
}

Greet("Junaid")
Greet("Mahmud")
Greet("Abrar")

const Greetings = (user) => "Hello, " + user;

console.log(Greetings("Farhan"));

function Calculator(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    } else {
        return null
    }
}

let x = Calculator(25, 10, "+");
console.log("Addition:", x)

console.log("Subtraction:", Calculator(15, 5, "-"));

let y = Calculator(12, 6, "*");
console.log("Multiplication:", y)

console.log("Divition:", Calculator(70, 5, "/"));

console.log("Error:", Calculator(60, 5, "%"));

// Global and Local Scopes
let global_variable = "I am a global variable!";

function Testing_Scopes() {
    let local_variable = "I am a local variable!"
    console.log(global_variable);
    console.log(local_variable);
}

Testing_Scopes();
console.log(global_variable);
// console.log(local_variable);

// Objects and Classes
let Car = {
    Brand: "Toyota",
    Model: "Corolla",
    Year: "2020",
    Info: function() {
        console.log("This car is brand new.");
    }
};

console.log(Car.Brand);
Car.Info();

let Circle = {
    radius: 6,
    area: function() {
        return Math.PI * this.radius * this.radius;
    },
    perimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(Circle.radius);
console.log(Circle.area());
console.log(Circle.perimeter());

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo() {
        return `The title of the book is ${this.title} by ${this.author} which is published in the year ${this.year}.`;
    }
}

let book_1 = new Book("Brave New World", "Aldous Huxley", 1932);
let book_2 = new Book("Animal Farm", "George Orwell", 1945);

console.log(book_1.getInfo());
console.log(book_2.getInfo());

// DOM
const button = document.getElementById("clickMe");
const main = document.querySelector(".main_content");
const header = document.querySelector("header");
const allParagraphs = document.querySelectorAll("p");

console.log(button);
console.log(main);
console.log(header);
console.log(allParagraphs);

const button_2 = document.getElementById("clickMe");
const h2 = document.getElementById("h2_heading");
const h3 = document.getElementById("console_instruction");
const p2 = document.getElementById("p_below_heading");
const main_2 = document.getElementById(".main_content");

button_2.addEventListener("click", function() {
    h2.innerText = "The button is clicked!";
    h2.style.color = "#ffffff";
    h3.style.color = "#ffffff";
    p2.style.color = "white";
    main.style.backgroundColor = "#283e4a";
    const p = document.createElement("p");
    p.innerText = "Additional text added!!";
    p.style.marginTop = "1rem";
    p.style.color = "#f0f0f0";
    main.appendChild(p);
});

// Browser BOM
console.log(innerWidth);
console.log(innerHeight);
console.log(location.href);

localStorage.setItem("username", "John");
console.log(localStorage.getItem("username"));

sessionStorage.setItem("session_data", "This session is new.");
console.log(sessionStorage.getItem("session_data"));

function set_cookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function get_cookie(name) {
    let e = name + "=";
    let s = document.cookie.split(";");
    for (let i = 0; i < s.length; i++) {
        let h = s[i].trim();
        if (h.indexOf(e) === 0) return h.substring(e.length, h.length);
    }
    return null;
}

function erase_cookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

set_cookie("user", "Abrar", 1);
console.log(get_cookie("user"));
erase_cookie("user");
console.log(get_cookie("user"));

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    });
} else {
    console.log("Does not support Geolocation!")
}

const button_3 = document.getElementById("clickMe");

button_3.addEventListener("click", function() {
    alert("Hello\nHow are you today?")
    let n = prompt("What should we call you?");
    console.log("User's name is", n);
    h2.innerText = `Hello, ${n}!`;
    let ic = confirm("Do you agree to our terms and conditions?");
    if (ic) {
        console.log("The user agreed to our terms and conditions.")
    } else {
        console.log("The user disagreed to our terms and conditions.")
    }
});

setTimeout(() => {
    console.log("This message will appear after 5 seconds.")
}, 5000);

let counter = 1;
const interval = setInterval(() => {
    console.log("Counter:", counter);
    counter++;
    if (counter > 10) {
        clearInterval(interval);
    }
}, 1000);

// Async
function fetch_user_data(callback) {
    console.log("Fetching user data...");

    setTimeout(() => {
        let user = {
            name: "Shuvo",
            age: 28
        };
        console.log("User data received.");
        callback(user);
    }, 2000);
}

function display_user(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}

fetch_user_data(display_user);

function get_post_id(post_id) {
    return new Promise((resolve, reject) => {
        console.log("Fetching post...");

        setTimeout(() => {
            if (post_id === 1) {
                resolve({
                    id: 1,
                    title: "Javascript Basics"
                });
            } else {
                reject("Post not found.");
            }
        }, 1500);
    });
}

get_post_id(1).then((post) => {
    console.log("Post title:", post.title);
}).catch((error) => {
    console.log("Error:", error);
});

function simulate_API(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success === true) {
                resolve("Data successfully loaded.")
            } else {
                reject("Data failed to load.")
            }
        }, 3000);
    });
}

async function fetch_data_async() {
    console.log("Start loading data...");

    try {
        let result = await simulate_API(true);
        console.log(result);
    } catch (error) {
        console.log("Caught error:", error);
    }

    console.log("Finished loading.");
}

fetch_data_async();

// Fetch API
function get_post() {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()).then(data => {
        console.log("Fetched post data:", data);
    }).catch(error => console.log("Error fetching data:", error));
}

get_post();

function get_posts() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => {
        console.log("Fetched posts data:", data);
    }).catch(error => console.log("Error fetching data:", error));
}

get_posts();

function create_post(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    }).then(response => response.json()).then(data => {
        console.log("Created post:", data);
    }).catch(error => console.log("Error creating post:", error));
}

create_post("My New Post", "This is the body of my new post.");

async function get_user_info(user_id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const user = await response.json();
        console.log("Fetched user info:", user);
    } catch (error) {
        console.log("Error fetching user info:", error);
    }
}

get_user_info(1);

function get_post_with_status_code_check() {
    fetch('https://jsonplaceholder.typicode.com/posts/100').then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }
        return response.json();
    }).then(data => {
        console.log("Fetched post:", data);
    }).catch(error => {
        console.log("Fetch error:", error);
    });
}

get_post_with_status_code_check();

function delete_post(delete_post_id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${delete_post_id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            console.log(`Post ${delete_post_id} deleted successfully!`);
        } else {
            console.log(`Error deleting post ${delete_post_id}`);
        }
    }).catch(error => console.log("Error deleting post:", error));
}

delete_post(1);

function update_post(update_post_id, updated_title, updated_body) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${update_post_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: update_post_id,
            title: updated_title,
            body: updated_body,
            userId: 1
        })
    }).then(response => response.json()).then(data => {
        console.log("Updated post:", data);
    }).catch(error => console.log("Error updating post:", error));
}

update_post(1, "Updated Post Title", "This is the updated body content.");

function get_comments(comments_post_id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${comments_post_id}/comments`)
        .then(response => response.json()).then(data => {
            console.log("Fetched comments:", data);
        }).catch(error => console.log("Error fetching comments:", error));
}

get_comments(1);

// AJAX
function ajax_get_post() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log("AJAX GET post:", data);
        }
    };
    xhr.send();
}

ajax_get_post();

function ajax_get_posts() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);
            console.log("AJAX posts:", posts);
        }
    };
    xhr.onerror = function () {
        console.log("AJAX request failed!");
    };
    xhr.send();
}

ajax_get_posts();

function ajax_create_post() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
        if (xhr.status === 201) {
            let post = JSON.parse(xhr.responseText);
            console.log("AJAX created post:", post);
        }
    };
    let new_post = {
        title: "New Post Title",
        body: "This is the new post created.",
        userId: 1
    };
    xhr.send(JSON.stringify(new_post));
}

ajax_create_post();

function ajax_update_post() {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.status === 200) {
            let updated_post = JSON.parse(xhr.responseText);
            console.log("AJAX updated post:", updated_post);
        }
    };
    let updated_data = {
        id: 1,
        title: "The title is updated",
        body: "New body content is available.",
        userId: 1
    };
    xhr.send(JSON.stringify(updated_data));
}

ajax_update_post();

function ajax_delete_post() {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("AJAX post deleted successfully!");
        }
    };
    xhr.send();
}

ajax_delete_post();

// Axios
function axios_get_post() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
        console.log("Axios GET post:", response.data);
    }).catch(error => {
        console.log("Error fetching post with Axios:", error);
    });
}

axios_get_post();

function axios_get_posts() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        console.log("Axios GET posts:", response.data);
    }).catch(error => {
        console.log("Error fetching posts with Axios:", error);
    });
}

axios_get_posts();

function axios_create_post(title, body) {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 1
    }).then(response => {
        console.log("Axios created post:", response.data);
    }).catch(error => {
        console.log("Error creating post with Axios:", error);
    });
}

axios_create_post("New created post", "This post was created!");

function axios_update_post() {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: "This is the updated title",
        body: "This body was updated here!",
        userId: 1
    }).then(response => {
        console.log("Axios updated post:", response.data);
    }).catch(error => {
        console.log("Error updating post with Axios:", error);
    });
}

axios_update_post();

function axios_delete_post() {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1').then(response => {
        console.log("Axios post deleted successfully!", response.status);
    }).catch(error => {
        console.log("Error deleting post with Axios:", error);
    });
}

axios_delete_post();

async function axios_get_user(axios_user_id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${axios_user_id}`);
        console.log("Axios fetched user info:", response.data);
    } catch (error) {
        console.log("Axios async error:", error);
    }
}

axios_get_user(1);

// JSON
let json_users = [
    {
        id: 1,
        name: "Shamim Ahmed",
        age: 35,
        email: "shamim.ahmed@example.com",
        isAdmin: false
    },
    {
        id: 2,
        name: "Rafiul Alam",
        age: 32,
        email: "rafiul.alam@example.com",
        isAdmin: true
    }
];

let json_string = JSON.stringify(json_users, null, 4);
console.log("JSON string:", json_string);

let json_parsed = JSON.parse(json_string);
console.log("JSON parsed:", json_parsed);

console.log("First User's Name:", json_parsed[0].name);
console.log("Second User's Email:", json_parsed[1].email);

json_parsed[0].age = 30;
console.log("Updated First User's Age:", json_parsed[0].age);

let new_user = {
    id: 3,
    name: "Ibrahim Khan",
    age: 26,
    email: "ibrahim.khan@example.com",
    isAdmin: false
};

json_parsed.push(new_user);
let updated_json_string = JSON.stringify(json_parsed, null, 4);
console.log("Updated JSON string:", updated_json_string);

localStorage.setItem('json_users', updated_json_string);

let saved_json_users = localStorage.getItem('json_users');
let saved_json_users_parsed = JSON.parse(saved_json_users);
console.log("Users retrieved from LocalStorage:", saved_json_users_parsed);