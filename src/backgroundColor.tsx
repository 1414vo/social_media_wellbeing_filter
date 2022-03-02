export async function changeBackgroundColor() {
    await chrome.tabs.query({active: true, currentWindow: true}, 
    (
      r => {
        chrome.scripting.executeScript({
            target: {tabId: r[0].id!}, 
            files: ['scripts/changeBackgroundColor.js']})
      }
    ));
}