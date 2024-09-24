import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from "react";

type FormInitialType = {
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    location: string;
}

type FormActionTypes = 
   | { type: 'SET_NAME'; payload: string }
   | { type: 'SET_NUMBER'; payload: string }
   | { type: 'SET_START_DATE'; payload: string }
   | { type: 'SET_END_DATE'; payload: string }
   | { type: 'SET_LOCATION'; payload: string }
   | { type: 'RESET_STATE'; payload: void };

type FormProviderProps = {
    children: ReactNode;
}

type FormContextType = {
    dispatch: Dispatch<FormActionTypes>;
    state: FormInitialType;
    setName: (name: string) => void;
    setNumber: (number: string) => void;
    setStartDate: (startDate: string) => void;
    setEndDate: (endDate: string) => void;
    setLocation: (location: string) => void;
    resetState: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialState: FormInitialType = {
    name: '',
    number: '',
    startDate: '',
    endDate: '',
    location: '',
}

const FormReducer = (state: FormInitialType, action: FormActionTypes) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_NUMBER':
            return { ...state, number: action.payload };
        case 'SET_START_DATE':
            return { ...state, startDate: action.payload };
        case 'SET_END_DATE':
            return { ...state, endDate: action.payload };
        case 'SET_LOCATION':
            return { ...state, location: action.payload }
        case 'RESET_STATE':
            return initialState;
        default: 
            return state;
    }
}

export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialState);
    const value = useMemo(
        () => ({
            dispatch,
            state,
            setName: (name: string) => 
                dispatch({
                    type: 'SET_NAME',
                    payload: name,
                }),

            setNumber: (number: string) => 
                dispatch({
                    type: 'SET_NUMBER',
                    payload: number,
                }),

            setStartDate: (startDate: string) => 
                dispatch({
                    type: 'SET_START_DATE',
                    payload: startDate,
                }),

            setEndDate: (endDate: string) => 
                dispatch({
                    type: 'SET_END_DATE',
                    payload: endDate,
                }),

            setLocation: (location: string) =>
                dispatch({
                    type: 'SET_LOCATION',
                    payload: location,
                }),

            resetState: () => 
                dispatch({
                    type: 'RESET_STATE',
                    payload: undefined,
                }),
        }),
        [state]
    );

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw Error('useForm must be used with FormContext');
    }
    return context
}