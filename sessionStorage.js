

sessionStorage.setItem("user","Rishan");
sessionStorage.setItem("user1","Maliha");

const userName = sessionStorage.getItem("user");
console.log(userName);

sessionStorage.removeItem("user");
sessionStorage.removeItem("user1");

sessionStorage.clear();