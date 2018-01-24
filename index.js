const token = '9e045bc9b201b3ffbe1ab2c0eb5dbe1783221f1b'
fetch('https://api.github.com/user/repos', {
  headers:{
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
