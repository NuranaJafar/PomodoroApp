import React, { createContext } from "react";
import { DEFAULT_SETTINGS} from '../utils/constants';

export const PomodoroContext = createContext();

export const PomodoroProvider = ({ children}) => {
    const[settings, setSettings] = useState(DEFAULT_SETTINGS);
    const[timeLeft, setTimeLeft] = useState(settings.workDuration * 60);
    const[isActive, setIsActive] = useState(false);
    const[mode,setMode] = useState(work);
    const[tasks, setTasks] = useState([]);
    const[stats,setStats] = useState({workSessions:0, shortreaks:0, longBreaks:0});
//timer logic

return(
    <PomodoroContext.Provider value = {{
        settings,setSettings,
        timeLeft,setTimeLeft,
        isActive,setIsActive,
        mode,setMode,
        tasks,setTasks,
        stats,setStats
    }}>
        {children}
    </PomodoroContext.Provider>
);
};
