const isVueApp = document.URL.indexOf('http://') === -1 &&
  document.URL.indexOf('https://') === -1

if (isVueApp) {
  const scriptTag = document.createElement('script')
  scriptTag.setAttribute('type', 'text/javascript')
  scriptTag.setAttribute('src', 'app.js')
  document.body.appendChild(scriptTag)
}
