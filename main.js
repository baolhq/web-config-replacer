let replBtn = document.querySelector("#repl");
let copyBtn = document.querySelector("#copy");
let clearBtn = document.querySelector("#clear");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let db = document.querySelector("#db");
let usr = document.querySelector("#usr");
let pwd = document.querySelector("#pwd");

let configTxt = [];

replBtn.addEventListener("click", () => {
  if (!input.value || !db.value || !usr.value || !pwd.value) {
    alert("Input required");
    return;
  }

  configTxt = []
  let arr = input.value.split("\n");
  let database = db.value.split("\\")[1];
  let dbServer = db.value.split("\\")[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(`<add key="DataAccess.Database"`)) {
      arr[i] = `    <add key="DataAccess.Database" value="${database}" />`;
    }
    if (arr[i].includes(`<add key="DataAccess.DbServer"`)) {
      arr[i] = `    <add key="DataAccess.DbServer" value="${dbServer}" />`;
    }
    if (arr[i].includes(`<add key="DataAccess.SqlPwd"`)) {
      arr[i] = `    <add key="DataAccess.SqlPwd" value="${pwd.value}" />`;
    }
    if (arr[i].includes(`<add key="DataAccess.AxAdminSqlPwd"`)) {
      arr[i] = `    <add key="DataAccess.AxAdminSqlPwd" value="${pwd.value}" />`;
    }
    if (arr[i].includes(`<add key="DataAccess.SqlUser"`)) {
      arr[i] = `    <add key="DataAccess.SqlUser" value="${usr.value}" />`;
    }
    if (arr[i].includes(`<add key="DataAccess.AxAdminSqlUser"`)) {
      arr[i] = `    <add key="DataAccess.AxAdminSqlUser" value="${usr.value}" />`;
    }
    configTxt.push(arr[i]);
  }
  output.value = ""
  output.value = configTxt.join("\n")
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  alert("Copied to clipboard")
});

clearBtn.addEventListener("click", () => {
    input.value = ""
    output.value = ""
    db.value = ""
    usr.value = ""
    pwd.value = ""
})