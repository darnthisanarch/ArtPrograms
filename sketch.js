//replace the default sketch.js with the following:
let gridButtonToggle
let exitProgramButton
let rerunProgramButton
let randomProgramButton

function setup() {
  ProgramManager[currentProgram]()
  gridButtonToggle = createButton("Grid Toggle")
  gridButtonToggle.mouseClicked(grid_button)
  exitProgramButton = createButton("Exit")
  exitProgramButton.mouseClicked(exit_button)
  rerunProgramButton = createButton("Rerun")
  rerunProgramButton.mouseClicked(rerun_button)
  randomProgramButton = createButton("Random")
  randomProgramButton.mouseClicked(random_button)
}

function draw() {
  
  ProgramManager[currentProgram]() 

}

function grid_button(){
  gridstate *= -1


}

function exit_button(){
  currentProgram = 0
  Program_Array_Initialized = false
  gt = 0
}
function rerun_button(){
  Program_Array_Initialized = false
  gt = 0
}
function random_button(){
  currentProgram = floor(random(ProgramManager.length))
  Program_Array_Initialized = false
  gt = 0
}
