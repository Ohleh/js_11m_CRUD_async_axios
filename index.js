// https://jsonplaceholder.typicode.com/posts/

const ref = {
  form: document.querySelector(".formPost"),
  title: document.querySelector(".titlePost"),
  text: document.querySelector(".textPost"),
  ul: document.querySelector(".listRender"),
};

const renderList = (data) => {
  const result = data.reduce(
    (acc, el) => (acc += `<li><b>${el.title}</b>:</br> ${el.body}</li>`),
    ""
  );
  ref.ul.insertAdjacentHTML("beforeend", result);
};

// POST /creat
const userPost = async (e) => {
  e.preventDefault();
  ref.ul.innerHTML = "";
  const title = ref.title.value;
  const text = ref.text.value;
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/",
      { title, body: text, id: 1 },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(response.data);
    renderList([response.data]);
  } catch (error) {
    console.log("error in try", error);
  }
};

ref.form.addEventListener("submit", userPost);
