///////////////////////////////////////////////////////////////////////////////
//  1. Hotkey  ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


export enum HotkeyAction {
    RunTask = 0,
    OpenFile = 1,
    OpenLink = 2,
    ToggleValue = 3
}

export type Hotkey
    = RunTaskHotkey 
    | HotkeyBase<HotkeyAction.OpenFile> 
    | OpenLinkHotkey 
    | ToggleValueHotkey;


///////////////////////////////////////////////////////////////////////////////
//  2. Generic Hotkey  ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


export interface HotkeyBase<T extends HotkeyAction> {
    id: string,
    action: T;
    shortcut: string,
    disabled?: boolean,
    allowBrowserBehavior?: boolean
}


///////////////////////////////////////////////////////////////////////////////
//  3. Run Task Hotkey  ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


export interface RunTaskHotkey extends HotkeyBase<HotkeyAction.RunTask> {
    repeat?: {
        delay: number,
        interval: number
    }
}


///////////////////////////////////////////////////////////////////////////////
//  4. Open Link Hotkey  //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


interface OpenLinkHotkey extends HotkeyBase<HotkeyAction.OpenLink> {
    link: string
}


///////////////////////////////////////////////////////////////////////////////
//  5. Toggle Value Hotkey  ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


interface ToggleValueHotkey extends HotkeyBase<HotkeyAction.ToggleValue> {
    value: boolean
}