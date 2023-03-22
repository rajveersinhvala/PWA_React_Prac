function swDev() {
  let SWURL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(SWURL)
    .then((res) => {
      console.warn("Responce", res);
    })
    .catch((e) => {
      console.log(e);
    });
}

export default swDev;
