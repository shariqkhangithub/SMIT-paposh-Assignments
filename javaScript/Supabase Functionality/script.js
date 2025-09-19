const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0eGtyd3R0YmRqcGpwbWdnemhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyOTAwNDgsImV4cCI6MjA3Mzg2NjA0OH0.wYzDrosxy3FafPairAM1obYqNxL8BkPEoGYyeDjbytg"; 
const PROJECT_URL = "https://vtxkrwttbdjpjpmggzhg.supabase.co";
const client = window.supabase.createClient(PROJECT_URL, PUBLIC_KEY);

let loggedUser = null;


const registerForm = document.getElementById("register-form");
const signinForm = document.getElementById("signin-form");
const signoutBtn = document.getElementById("signout-btn");
const todoList = document.querySelector(".todo-list");
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskBody = document.getElementById("task-body");


registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-pass").value;

  const { data, error } = await client.auth.signUp({ email, password });
  if (error) {
    alert("Could not register: " + error.message);
  } else {
    alert("Confirm your email to continue");
    registerForm.reset();
  }
});

signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("log-email").value;
  const password = document.getElementById("log-pass").value;

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    loggedUser = data.user;
    showPanel();
    loadTasks();
  }
});

signoutBtn.addEventListener("click", async () => {
  await client.auth.signOut();
  toggleUI("auth");
  loggedUser = null;
});

function toggleUI(mode) {
  document.getElementById("register-form").style.display =
    mode === "register" ? "block" : "none";
  document.getElementById("signin-form").style.display =
    mode === "signin" ? "block" : "none";
  document.getElementById("todo-panel").style.display =
    mode === "dashboard" ? "block" : "none";
  if (mode === "auth") {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("signin-form").style.display = "block";
    document.getElementById("todo-panel").style.display = "none";
  }
}

function showPanel() {
  toggleUI("dashboard");
}

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!loggedUser) {
    alert("Please login first");
    return;
  }

  const { error } = await client.from("todos").insert({
    title: taskTitle.value,
    content: taskBody.value,
    user_id: loggedUser.id,
  });

  if (error) {
    alert("Error adding: " + error.message);
  } else {
    taskForm.reset();
    loadTasks();
  }
});

async function loadTasks() {
  if (!loggedUser) return;

  const { data, error } = await client
    .from("todos")
    .select("*")
    .eq("user_id", loggedUser.id);

  if (error) {
    console.log("Fetch failed:", error);
    return;
  }

  todoList.innerHTML = "";
  data.forEach((t) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><b>${t.title}</b> - ${t.content}</span>
      <div class="actions">
        <button onclick="editTask(${t.id}, '${t.title}', '${t.content}')">✏</button>
        <button onclick="removeTask(${t.id})">🗑</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

async function editTask(id, oldTitle, oldContent) {
  const updatedTitle = prompt("Update title:", oldTitle);
  const updatedContent = prompt("Update content:", oldContent);

  if (!updatedTitle || !updatedContent) return;

  const { error } = await client
    .from("todos")
    .update({ title: updatedTitle, content: updatedContent })
    .eq("id", id)
    .eq("user_id", loggedUser.id);

  if (error) {
    alert("Update failed: " + error.message);
  } else {
    loadTasks();
  }
}

async function removeTask(id) {
  const { error } = await client
    .from("todos")
    .delete()
    .eq("id", id)
    .eq("user_id", loggedUser.id);

  if (error) {
    alert("Delete failed: " + error.message);
  } else {
    loadTasks();
  }
}

(async () => {
  const { data } = await client.auth.getSession();
  if (data.session) {
    loggedUser = data.session.user;
    showPanel();
    loadTasks();
  }
})();