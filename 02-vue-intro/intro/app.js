const { createApp, ref } = Vue;

const app = createApp({
  //   template: `
  //         <h1>{{author}}</h1>
  //         <p>{{message}}</p>
  //     `,

  // Setup se ejecuta tan pronto el componente se monta
  setup() {
    // variables reactivas con ref
    const message = ref("Vue is awesome!");
    const author = ref("Bruce Wayner");

    function changeQuote() {
      author.value = "Clark Kent";
      message.value = "Vue is still awesome!";
    }

    // setTimeout(() => {
    //   message.value = "Vue is still awesome!";
    //   author.value = "Clark Kent";
    // }, 3000);

    return { message, author, changeQuote };
  },
});

app.mount("#myApp");
