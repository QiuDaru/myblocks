Blockly.Blocks['threeblockly'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("NFT1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};