# ScreenTimeSkills — Live Preview Server

This lightweight preview watches the `Views` folder and pushes Swift file changes to a browser window for quick visual feedback.

Quick start:

```powershell
cd preview-server
npm install
npm start
```

Open http://localhost:3000 in your browser. The server watches `../ScreenTimeSkills/Views` and sends updated file contents to the page which renders a basic HTML approximation of SwiftUI.

Notes:
- This is not a SwiftUI renderer; it provides a fast, heuristic preview and live file updates.
- You can modify `public/app.js` to customize how SwiftUI maps to HTML.
