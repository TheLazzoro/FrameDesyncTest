import { Frame, Timer, Trigger } from "w3ts/index"

let frameGameModeSelection: Frame
let frameClassicText: Frame
let frameCustomText: Frame
let frameClassicCrests: Frame
let frameCustomCrests: Frame
let frameBannerLeft: Frame
let frameBannerRight: Frame
let frameClassicDesc: Frame
let frameCustomDesc
let btnClassic: Frame
let btnCustom: Frame
let frameHost: Frame
let trig: trigger
let timerGameMode: Timer
let timeRemaining: number
let frameTimeRemaining: Frame[] = []

export function InitiateGameModeSelection() {

}

export function SetupGameModeSelection() {
    timerGameMode = new Timer()

    frameGameModeSelection = new Frame("EscMenuBackdrop", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 0, 0)
    frameGameModeSelection.setSize(0.65, 0.34)
    frameGameModeSelection.setAbsPoint(FRAMEPOINT_CENTER, 0.4, 0.36)
    frameGameModeSelection.setVisible(true)

    frameClassicText = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameClassicText.setSize(0.12, 0.06)
    frameClassicText.setAbsPoint(FRAMEPOINT_CENTER, 0.27, 0.48)
    frameClassicText.setTexture("war3mapImported\\Classic_Mode_Text.dds", 0, true)

    frameCustomText = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameCustomText.setSize(0.12, 0.06)
    frameCustomText.setAbsPoint(FRAMEPOINT_CENTER, 0.53, 0.48)
    frameCustomText.setTexture("war3mapImported\\Custom_Mode_Text.dds", 0, true)

    frameClassicCrests = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameClassicCrests.setSize(0.26, 0.13)
    frameClassicCrests.setAbsPoint(FRAMEPOINT_CENTER, 0.27, 0.4)
    frameClassicCrests.setTexture("war3mapImported\\Classic_Races_Crests.dds", 0, true)

    frameCustomCrests = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameCustomCrests.setSize(0.26, 0.13)
    frameCustomCrests.setAbsPoint(FRAMEPOINT_CENTER, 0.53, 0.4)
    frameCustomCrests.setTexture("war3mapImported\\Custom_Races_Crests.dds", 0, true)

    frameBannerLeft = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameBannerLeft.setSize(0.08, 0.08)
    frameBannerLeft.setAbsPoint(FRAMEPOINT_CENTER, 0.13, 0.485)
    frameBannerLeft.setTexture("war3mapImported\\HumanBanner.dds", 0, true)

    frameBannerRight = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameBannerRight.setSize(0.08, 0.08)
    frameBannerRight.setAbsPoint(FRAMEPOINT_CENTER, 0.67, 0.485)
    frameBannerRight.setTexture("war3mapImported\\OrcBanner.dds", 0, true)

    frameClassicDesc = new Frame("TasButtonTextTemplate", frameGameModeSelection, 0, 0)
    frameClassicDesc.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17, 0.335)
    frameClassicDesc.setText("- Features all four melee Warcraft 3 races\n- Races: |cff1b6ef5Human|r, |cfff5381bOrc|r, |cff8431f7Undead|r, |cff008a17Night Elf|r\n- Earned skins can be equipped in this mode")

    frameCustomDesc = new Frame("TasButtonTextTemplate", frameGameModeSelection, 0, 0)
    frameCustomDesc.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.43, 0.335)
    frameCustomDesc.setText("- Features races created by members of Hiveworkshop\n- Races: |cffa346ffDalaran|r, |cffcf1d1dBlood Elf|r, |cff936d96Forsaken|r, |cff0bd9c1Naga|r\n\nCredit: Wa666r, Unregret, Riki, ZiBitheWand3r3r")

    btnClassic = new Frame("ScriptDialogButton", frameGameModeSelection, 0, 0)
    btnClassic.setSize(0.09, 0.035)
    btnClassic.setAbsPoint(FRAMEPOINT_CENTER, 0.27, 0.25)
    btnClassic.setText("Select")
    btnClassic.setVisible(true)

    // Click Classic
    trig = CreateTrigger()
    BlzTriggerRegisterFrameEvent(trig, btnClassic.handle, FRAMEEVENT_CONTROL_CLICK)
    TriggerAddAction(trig, () => {
        print("classic")
    })

    btnCustom = new Frame("ScriptDialogButton", frameGameModeSelection, 0, 0)
    btnCustom.setSize(0.09, 0.035)
    btnCustom.setAbsPoint(FRAMEPOINT_CENTER, 0.53, 0.25)
    btnCustom.setText("Select")
    btnCustom.setVisible(true)

    // Click Custom
    trig = CreateTrigger()
    BlzTriggerRegisterFrameEvent(trig, btnCustom.handle, FRAMEEVENT_CONTROL_CLICK)
    TriggerAddAction(trig, () => {
        print("custom")
    })

    let frameHostLight = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameHostLight.setSize(0.12, 0.03)
    frameHostLight.setAbsPoint(FRAMEPOINT_CENTER, 0.4, 0.22)
    frameHostLight.setTexture("war3mapImported\\Host_Selecting_Light.dds", 0, true)

    frameHost = new Frame("ProfileNameText", frameGameModeSelection, 0, 0)
    frameHost.setAbsPoint(FRAMEPOINT_CENTER, 0.4, 0.22)
    frameHost.setText("Host is selecting")

    let frameTimeRemainingMode = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
    frameTimeRemainingMode.setSize(0.06, 0.045)
    frameTimeRemainingMode.setAbsPoint(FRAMEPOINT_LEFT, 0.35, 0.25)
    frameTimeRemainingMode.setTexture("war3mapImported\\Time_Remaining.dds", 0, true)

    for (let i = 1; i < 3; i++) {
        frameTimeRemaining[i] = new Frame("", frameGameModeSelection, 0, 0, "BACKDROP", "")
        frameTimeRemaining[i].setSize(0.03, 0.02)
        if (i == 1) {
            frameTimeRemaining[i].setAbsPoint(FRAMEPOINT_LEFT, 0.415, 0.25)
            frameTimeRemaining[i].setTexture("war3mapImported\\3.dds", 0, true)
        } else {
            frameTimeRemaining[i].setAbsPoint(FRAMEPOINT_LEFT, 0.433, 0.25)
            frameTimeRemaining[i].setTexture("war3mapImported\\0.dds", 0, true)
        }
    }

    // Timer expire
    let timerTrig = new Trigger()
    timerTrig.registerTimerExpireEvent(timerGameMode.handle)
    timerTrig.addAction(() => {
        if (timeRemaining > 0) {
            timeRemaining -= 1
            timerGameMode.start(1, false, () => { })
        } else {
            let randomMode = GetRandomInt(1, 2)

        }

        // Update visual timer
        let timeStr = I2S(timeRemaining)
        for (let i = 1; i < StringLength(timeStr) + 1; i++) {
            let num = S2I(SubStringBJ(timeStr, i, i))

            if (timeRemaining < 10) {
                frameTimeRemaining[2].setVisible(false)
                frameTimeRemaining[i].setTexture("textureNumber[num]", 0, true)
            } else {
                frameTimeRemaining[2].setVisible(true)
                frameTimeRemaining[i].setTexture("textureNumber[num]", 0, true)
            }
        }
    })
}