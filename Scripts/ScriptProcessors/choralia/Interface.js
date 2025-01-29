// Init program interface
Content.makeFrontInterface(600, 400);

// UI elements
const ChordLbl = Content.getComponent("ChordLbl");

// Globals Vars
global activeNotes = [];

// Global Functions
global _updateLbl = function() {
    ChordLbl.setValue(activeNotes.map(n => Engine.getMidiNoteName(n)).join(" "));
};

function onNoteOn()
{
    var note = Message.getNoteNumber();
    
    activeNotes.pushIfNotAlreadyThere(note);
    
    _updateLbl();
}

function onNoteOff()
{
	var note = Message.getNoteNumber();
	activeNotes.remove(note);
	_updateLbl();
}

function onController()
{
	
}
 function onTimer()
{
	
}

 function onControl(number, value)
{
	
}
 