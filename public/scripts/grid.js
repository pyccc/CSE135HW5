// window.onload event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', () => {
    // content after DOM load
    const zgRef = document.querySelector('zing-grid');
    const data = [
      {
        Element: 'Keyboard Input',
        Value: localStorage.getItem("keystrokes"),
      },
      {
        Element: 'User_Agent',
        Value: localStorage.getItem("user-agent"),
      },
      {
        Element: 'User_Language',
        Value: localStorage.getItem("user-language"),
      },
      {
        Element: 'Cookies_On',
        Value: localStorage.getItem("cookies"),
      },
      {
        Element: 'Screen_Width',
        Value: localStorage.getItem("screen-width"),
      },
      {
        Element: 'Screen_Height',
        Value: localStorage.getItem("screen-height"),
      },
      {
        Element: 'Window_Width',
        Value: localStorage.getItem("window-width"),
      },
      {
          Element: 'Window_Height',
          Value: localStorage.getItem("window-height"),
      },
      {
          Element: "Connection_Type",
          Value: localStorage.getItem("connection"),
      }
    ]; 
    zgRef.setData(data);
  });