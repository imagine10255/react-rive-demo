import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const RiveDemo2 = () => {
  // Machine Name 需對應 riv 內的名稱
  const STATE_MACHINE_NAME = 'State machine 1';
  // input name 需對應 riv 內的名稱
  const INPUT_NAME = {
    DOWNLOADING: 'Downloading',
    PROGRESS: 'Progress',
  };
  const { rive, RiveComponent: RiveComponentTouch } = useRive({
    src: '/rive/demo2_download.riv',
    stateMachines: STATE_MACHINE_NAME,
    // artboard: 'New Artboard',
    autoplay: true,
  }); // levelInput is a number state machine input. To transition the state machine,
  // we need to set the value to a number. For this state machine input, we need
  // to set to 0, 1 or 2 for a state transition to occur.

  const downloadingInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME.DOWNLOADING
  );
  const progressInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME.PROGRESS
  );

  return (
    // The animation will fit to the parent element, so we set a large height
    // and width for this example.
    <div style={{ width: '400px', height: '400px' }}>
      <RiveComponentTouch />
      <div className="btn-group">
        Choose a level:
        <button type="button" onClick={() => (downloadingInput.value = true)}>
          true
        </button>
        <button type="button" onClick={() => (downloadingInput.value = false)}>
          false
        </button>
        <input
          type="text"
          onChange={(e) => (progressInput.value = e.target.value)}
          defaultValue={Number(progressInput?.value ?? 0)}
        />
      </div>
    </div>
  );
};

export default RiveDemo2;
