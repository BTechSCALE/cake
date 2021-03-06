/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


Blockly.Blocks['controls_whileUntil'] = {
  /**
   * Block for 'do while/until' loop.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
         [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
    this.setColour(220);
    this.appendValueInput('BOOL')
        .setCheck(['Boolean', 'Number', 'INT', 'VAR_INT'])
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true, "STATEMENT");
    this.setNextStatement(true, "STATEMENT");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
      this.tag = Blockly.Msg.TAG_LOOP_WHILE;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
      };
      return TOOLTIPS[op];
    });
  },
};

Blockly.Blocks['controls_doWhile'] = {
    /**
     * Block for 'do while/until' loop.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS =
            [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
                [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
        this.setColour(220);
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
        this.appendValueInput('BOOL')
            .setCheck(['Boolean', 'Number', 'INT', 'VAR_INT'])
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
        this.setPreviousStatement(true, "STATEMENT");
        this.setNextStatement(true, "STATEMENT");
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.tag = Blockly.Msg.TAG_LOOP_WHILE;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('MODE');
            var TOOLTIPS = {
                'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op];
        });
    },

};

Blockly.Blocks['controls_repeat'] = {
  /**
   * Block for 'for' loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
    this.interpolateMsg(Blockly.Msg.CONTROLS_REPEAT_TITLE,
      ['TIMES', ['Number', 'Variable', 'INT', 'NEGATIVE', 'VAR_INT', 'VAR_UNINT'], Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
    this.setPreviousStatement(true, "STATEMENT");
    this.setNextStatement(true, "STATEMENT");
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
      this.tag = Blockly.Msg.CONTROLS_REPEAT_TITLE;
    this.setTooltip(function() {
      return Blockly.Msg.CONTROLS_REPEAT_TOOLTIP;
    });
  },
};

Blockly.Blocks['controls_for'] = {
  /**
   * Block for 'for' loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(220);
    this.appendStatementInput("INIT")
        .setCheck(["DEC", "SET"])
        .appendField("for");
    this.appendValueInput("COND")
        .setCheck(null)
        .appendField("repeat while")
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO)
        .setCheck("STATEMENT")
        .setAlign(Blockly.ALIGN_RIGHT);
      this.appendStatementInput("INC")
        .setCheck(["SET"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("next");
    this.setPreviousStatement(true, "STATEMENT");
    this.setNextStatement(true, "STATEMENT");
    this.setInputsInline(false);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
      this.tag = Blockly.Msg.TAG_LOOP_FOR;
  },
};

Blockly.Blocks['controls_flow_statements'] = {
  /**
   * Block for flow statements: continue, break.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, 'BREAK'],
         [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, 'CONTINUE']];
    this.setColour(220);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'FLOW');
    this.setPreviousStatement(true, "STATEMENT");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
      this.tag = Blockly.Msg.TAG_LOOP_FLOW;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('FLOW');
      var TOOLTIPS = {
        'BREAK': Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
        'CONTINUE': Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
      };
      return TOOLTIPS[op];
    });
  },
  /**
   * Called whenever anything on the workspace changes.
   * Add warning if this flow block is not nested inside a loop.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    var legal = false;
    // Is the block nested in a control statement?
    var block = this;
    do {
      if (['controls_for', 'controls_whileUntil','controls_doWhile'].includes(block.type)) {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);
    }
  }
};
