import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {UserProvider} from "./contexts/UserContext.jsx";
import {CaseProvider} from "./contexts/CaseContext.jsx";
import {QuestionsProvider} from "./contexts/QuestionsContext.jsx";
import {HistoryQuestionsProvider} from "./contexts/HistoryQuestionsContext.jsx"
import {ToothDetailsProvider} from "./contexts/ToothDetailsContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
          <CaseProvider>
              <QuestionsProvider>
                  <HistoryQuestionsProvider>
                      <ToothDetailsProvider>
                        <App />
                      </ToothDetailsProvider>
                  </HistoryQuestionsProvider>
              </QuestionsProvider>
          </CaseProvider>
      </UserProvider>
  </React.StrictMode>,
)
