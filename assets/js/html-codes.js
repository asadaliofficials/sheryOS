export const flapyBirdCode = `
  			<div class="background"></div>
					<img src="assets/images/flappy-bird/Bird.png" alt="bird-img" class="bird" id="bird-1" />
					<div class="message">
						Enter To Start Game
						<p>
							<span style="color: red">&uarr;</span>
							ArrowUp to Control
						</p>
					</div>
					<div class="score">
						<span class="score_title"></span>
						<span class="score_val"></span>
					</div>
  `;
export const calculatorCode = `
 <div class="container">
      <div class="calculator">
        <input type="text" id="inputBox" placeholder="0" />
        <div>
          <button class="button operator">AC</button>
          <button class="button operator">DEL</button>
          <button class="button operator">%</button>
          <button class="button operator">/</button>
        </div>
        <div>
          <button class="button">7</button>
          <button class="button">8</button>
          <button class="button">9</button>
          <button class="button operator">*</button>
        </div>
        <div>
          <button class="button">4</button>
          <button class="button">5</button>
          <button class="button">6</button>
          <button class="button operator">-</button>
        </div>
        <div>
          <button class="button">1</button>
          <button class="button">2</button>
          <button class="button">3</button>
          <button class="button operator">+</button>
        </div>

        <div>
          <button class="button">00</button>
          <button class="button">0</button>
          <button class="button">.</button>
          <button class="button equalBtn">=</button>
        </div>
      </div>
    </div>`;

export const mongodbCode = `
<div class="mongodb-app">
  <div class="mongodb-sidebar">
    <div class="mongodb-logo">MongoDB</div>
    <ul class="mongodb-db-list">
      <li class="active">test_db</li>
      <li>sample_db</li>
      <li>users_db</li>
    </ul>
    <button class="mongodb-add-db">+ Add Database</button>
  </div>
  <div class="mongodb-main">
    <div class="mongodb-header">
      <span class="mongodb-db-title">test_db</span>
      <button class="mongodb-add-collection">+ Add Collection</button>
    </div>
    <div class="mongodb-collections">
      <div class="mongodb-collection">
        <span class="mongodb-collection-name">users</span>
        <span class="mongodb-collection-count">12 docs</span>
      </div>
      <div class="mongodb-collection">
        <span class="mongodb-collection-name">products</span>
        <span class="mongodb-collection-count">8 docs</span>
      </div>
      <div class="mongodb-collection">
        <span class="mongodb-collection-name">orders</span>
        <span class="mongodb-collection-count">3 docs</span>
      </div>
    </div>
    <div class="mongodb-documents">
      <div class="mongodb-doc-header">
        <span>Documents in <b>users</b></span>
        <button class="mongodb-add-doc">+ Add Document</button>
      </div>
      <pre class="mongodb-doc">
{
  "_id": "1",
  "name": "Asad",
  "email": "asad@example.com"
}
      </pre>
      <pre class="mongodb-doc">
{
  "_id": "2",
  "name": "Ali",
  "email": "ali@example.com"
}
      </pre>
    </div>
  </div>
</div>
`;

export const vscodeCode = `
<div class="vscode-app">

  <div class="vscode-main">
    <div class="vscode-sidebar">
      <div class="vscode-sidebar-icon active" title="Explorer">
        <img style="filter: invert(1)" src="assets/images/vscode-explorer.png" />
      </div>
      <div class="vscode-sidebar-icon" title="Search">
        <img src="assets/images/search.svg" />
      </div>
      <div class="vscode-sidebar-icon" title="Source Control">
        <img style="filter: invert(1)" src="assets/images/git.png" />
      </div>
      <div class="vscode-sidebar-icon" title="Run & Debug">
        <img style="filter: invert(1)" src="assets/images/run.png" />
      </div>
      <div class="vscode-sidebar-icon" title="Extensions">
        <img style="filter: invert(1)" src="assets/images/extension.png" />
      </div>
    </div>
    <div class="vscode-explorer">
      <div class="vscode-explorer-header">EXPLORER</div>
      <ul class="vscode-file-list">
        <li class="vscode-file active"><img style="filter: invert(1)" src="assets/images/file.png" /> index.html</li>
        <li class="vscode-file"><img style="filter: invert(1)" src="assets/images/file.png" /> style.css</li>
        <li class="vscode-file"><img style="filter: invert(1)" src="assets/images/file.png" /> app.js</li>
        <li class="vscode-file"><img style="filter: invert(1)" src="assets/images/folder-black.png" /> assets
        </li>
      </ul>
    </div>
    <div class="vscode-editor">
      <div class="vscode-tabs">
        <div class="vscode-tab active">
          <img style="filter: invert(1)" width='20px' src="assets/images/file.png" />
          <span>index.html</span>
          <span class="vscode-tab-close">&times;</span>
        </div>
        <div class="vscode-tab">
          <img style="filter: invert(1)" width='20px' src="assets/images/file.png" />
          <span>style.css</span>
          <span class="vscode-tab-close">&times;</span>
        </div>
      </div>
      <div class="vscode-editor-area">
      <pre class="vscode-code">
<span class="token-tag">&lt;!DOCTYPE html&gt;</span>
<span class="token-tag">&lt;html</span> <span class="token-attr">lang</span>=<span class="token-string">"en"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;head&gt;</span>
    <span class="token-tag">&lt;meta</span> <span class="token-attr">charset</span>=<span class="token-string">"UTF-8"</span> <span class="token-tag">/&gt;</span>
    <span class="token-tag">&lt;title&gt;</span><span class="token-text">VS Code UI Clone</span><span class="token-tag">&lt;/title&gt;</span>
  <span class="token-tag">&lt;/head&gt;</span>
  <span class="token-tag">&lt;body&gt;</span>
    <span class="token-tag">&lt;h1&gt;</span><span class="token-text">Hello, Asad Ali!</span><span class="token-tag">&lt;/h1&gt;</span>
  <span class="token-tag">&lt;/body&gt;</span>
<span class="token-tag">&lt;/html&gt;</span>
</pre>
      </div>
    </div>
  </div>
  <div class="vscode-statusbar">
    <span class="vscode-statusbar-item">Ln 1, Col 1</span>
    <span class="vscode-statusbar-item">Spaces: 2</span>
    <span class="vscode-statusbar-item">UTF-8</span>
    <span class="vscode-statusbar-item">LF</span>
    <span class="vscode-statusbar-item">Prettier</span>
    <span class="vscode-statusbar-item">Go Live</span>
  </div>
</div>
`;

export const ChromeCode = `
<div class="chrome-app">
  <div class="chrome-toolbar">
    <span class="chrome-nav-btn back"></span>
    <span class="chrome-nav-btn forward"></span>
    <span class="chrome-nav-btn reload"></span>
    <div class="chrome-addressbar">
      <img src="assets/images/lock.png" class="chrome-lock" />
      <input type="text" value="https://www.google.com" readonly />
      <img src="assets/images/star.png" class="chrome-star" />
    </div>
    <span class="chrome-nav-btn more"></span>
  </div>
  <div class="chrome-content google-dark">
    <div class="google-logo"></div>
    <form class="google-search">
      <input class="google-input" type="text" placeholder="Search Google or type a URL" />
      <div class="google-buttons">
        <button type="button">Google Search</button>
        <button type="button">I'm Feeling Lucky</button>
      </div>
    </form>
    <div class="google-footer">
      <span>Google offered in: <a href="#">اردو</a> <a href="#">پښتو</a> <a href="#">English (UK)</a></span>
    </div>
  </div>
</div>
`;

export const settingsCode = `
<div class="win11-settings-app">
  <div class="settings-sidebar">
    <div class="settings-user">
      <img src="assets/images/user.png" alt="User" />
      <div>
        <div class="settings-username">Asad Ali</div>
        <div class="settings-email">asad@example.com</div>
      </div>
    </div>
    <ul class="settings-menu">
      <li class="active"><img src="assets/images/settings.png" /> System</li>
      <li><img src="assets/images/bluetooth.png" /> Bluetooth & devices</li>
      <li><img src="assets/images/network.png" /> Network & internet</li>
      <li><img src="assets/images/personalize.png" /> Personalization</li>
      <li><img src="assets/images/apps.png" /> Apps</li>
      <li><img src="assets/images/account.png" /> Accounts</li>
      <li><img src="assets/images/time.png" /> Time & language</li>

      <li><img src="assets/images/privacy.png" /> Privacy & security</li>
      <li><img src="assets/images/update.png" /> Windows Update</li>
    </ul>
  </div>
  <div class="settings-main">
    <div class="settings-header">
      <div class="settings-title">System</div>
      <input class="settings-search" type="text" placeholder="Find a setting" />
    </div>
    <div class="settings-cards">
      <div class="settings-card">
        <div class="settings-card-title">Display</div>
        <div class="settings-card-desc">Monitors, brightness, night light, display profile</div>
      </div>
      <div class="settings-card">
        <div class="settings-card-title">Sound</div>
        <div class="settings-card-desc">Volume levels, output, input, sound devices</div>
      </div>
      <div class="settings-card">
        <div class="settings-card-title">Notifications</div>
        <div class="settings-card-desc">Alerts, actions, focus assist</div>
      </div>
      <div class="settings-card">
        <div class="settings-card-title">Power & battery</div>
        <div class="settings-card-desc">Sleep, battery usage, power mode</div>
      </div>
    </div>
  </div>
</div>
`;

export const terminalCode = `
<div class="win-terminal-app">
  <div class="terminal-body">
    <div class="terminal-content">
      <div class="terminal-line">
        <span class="terminal-prompt">C:\\Users\\Asad&gt;</span>
        <input type="text" class="terminal-input" placeholder="Type a command..." />
      </div>
    </div>
  </div>
</div>
`;

export const notepadCode = `
<div class="notepad-app">
  <div class="notepad-toolbar">
    <button class="notepad-save">Save</button>
    <button class="notepad-clear">Clear</button>
  </div>
  <textarea class="notepad-textarea" placeholder="Start typing..."></textarea>
</div>
`;
export const recycleBinCode = `
<div class="recyclebin-app">
  <div class="recyclebin-toolbar">
    <button class="recyclebin-empty">Empty Recycle Bin</button>
    <button class="recyclebin-restore">Restore All Items</button>
  </div>
  <div class="folder-content">

  </div>
</div>
`;
export const thisPcCode = `
<div class="thispc-app">
  <div class="thispc-sidebar">
    <div class="thispc-sidebar-section">
      <div class="thispc-sidebar-title">Quick Access</div>
      <ul>
        <li class="active"><img src="assets/images/this-pc.png" /> Desktop</li>
        <li><img src="assets/images/Downloads.png" /> Downloads</li>
        <li><img src="assets/images/documents.png" /> Documents</li>
        <li><img src="assets/images/pictures.png" /> Pictures</li>
        <li><img src="assets/images/music.png" /> Music</li>
        <li><img src="assets/images/videos.png" /> Videos</li>
      </ul>
    </div>
    <div class="thispc-sidebar-section">
      <div class="thispc-sidebar-title">Devices and drives</div>
      <ul>
        <li><img src="assets/images/this-pc.png" /> This PC</li>
        <li><img src="assets/images/usb.png" /> USB Drive (E:)</li>
      </ul>
    </div>
  </div>
  <div class="thispc-main">
    <div class="thispc-header">
      <span class="thispc-title"><img src="assets/images/this-pc.png" /> This PC</span>
      <input class="thispc-search" type="text" placeholder="Search This PC" />
    </div>
    <div class="thispc-partitions">
      <div class="thispc-partition">
        <img src="assets/images/drive.png" />
        <div>
          <div class="thispc-partition-title">Local Disk (C:)</div>
          <div class="thispc-partition-bar">
            <div class="thispc-partition-bar-used" style="width: 40%"></div>
          </div>
          <div class="thispc-partition-info">120 GB free of 256 GB</div>
        </div>
      </div>
      <div class="thispc-partition">
        <img src="assets/images/usb.png" />
        <div>
          <div class="thispc-partition-title">USB Drive (E:)</div>
          <div class="thispc-partition-bar">
            <div class="thispc-partition-bar-used" style="width: 70%"></div>
          </div>
          <div class="thispc-partition-info">9 GB free of 32 GB</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
export const folderCode = `
<div class="thispc-app">
  <div class="thispc-sidebar folder-sidebar">
    <div class="thispc-sidebar-section">
      <div class="thispc-sidebar-title">Quick Access</div>
      <ul>
        <li class="active"><img src="assets/images/this-pc.png" /> Desktop</li>
        <li><img src="assets/images/Downloads.png" /> Downloads</li>
        <li><img src="assets/images/documents.png" /> Documents</li>
        <li><img src="assets/images/pictures.png" /> Pictures</li>
        <li><img src="assets/images/music.png" /> Music</li>
        <li><img src="assets/images/videos.png" /> Videos</li>
      </ul>
    </div>
    <div class="thispc-sidebar-section">
      <div class="thispc-sidebar-title">Devices and drives</div>
      <ul>
        <li><img src="assets/images/this-pc.png" /> This PC</li>
        <li><img src="assets/images/usb.png" /> USB Drive (E:)</li>
      </ul>
    </div>
  </div>
  <div class="folder-main">
    <div class="folder-header">
    <div class='buttons'>
      <button class="folder-btn back">Back</button>
  <button class="folder-btn forward">Forward</button>
  <button class="folder-btn new-folder">New Folder</button>
  <button class="folder-btn new-note">New Note</button>
    </div>
      <input class="folder-search" type="text" placeholder="Search this folder" />
    </div>
    <hr>
    <div class="folder-content">
   <div class="folder-empty">This folder is empty</div>
    </div>
  </div>
</div>
`;
