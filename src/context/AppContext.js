import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';

const AppContext = createContext();

const initialState = {
  user: {
    id: 1,
    name: 'Alex',
    level: 1,
    streak: 3,
    language: 'en',
    lessonsCompleted: 8,
    totalLessons: 32,
    timeSpent: 47
  },
  currentChapter: 3,
  currentLesson: 1,
  chapters: mockData.chapters,
  lessons: mockData.lessons,
  concepts: mockData.concepts,
  learningPaths: mockData.learningPaths
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        user: { ...state.user, language: action.payload }
      };
    
    case 'COMPLETE_LESSON':
      return {
        ...state,
        user: {
          ...state.user,
          lessonsCompleted: state.user.lessonsCompleted + 1
        }
      };
    
    case 'SET_CURRENT_LESSON':
      return {
        ...state,
        currentLesson: action.payload.lessonId,
        currentChapter: action.payload.chapterId
      };
    
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        user: {
          ...state.user,
          timeSpent: state.user.timeSpent + action.payload.timeSpent
        }
      };
    
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setLanguage = (language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  const completeLesson = () => {
    dispatch({ type: 'COMPLETE_LESSON' });
  };

  const setCurrentLesson = (lessonId, chapterId) => {
    dispatch({ 
      type: 'SET_CURRENT_LESSON', 
      payload: { lessonId, chapterId } 
    });
  };

  const updateProgress = (timeSpent) => {
    dispatch({ 
      type: 'UPDATE_PROGRESS', 
      payload: { timeSpent } 
    });
  };

  const getCurrentLesson = () => {
    return state.lessons.find(lesson => lesson.id === state.currentLesson);
  };

  const getCurrentChapter = () => {
    return state.chapters.find(chapter => chapter.id === state.currentChapter);
  };

  const getChapterProgress = () => {
    return state.chapters.map(chapter => ({
      ...chapter,
      status: chapter.completed ? 'complete' : 
              chapter.current ? 'in_progress' : 'locked'
    }));
  };

  const value = {
    ...state,
    setLanguage,
    completeLesson,
    setCurrentLesson,
    updateProgress,
    getCurrentLesson,
    getCurrentChapter,
    getChapterProgress
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}