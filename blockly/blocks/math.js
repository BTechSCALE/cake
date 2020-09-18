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
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks');


Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
      this.tag = Blockly.Msg.TAG_MATH_NUMBER;
  },
  //when the block is changed, setOutput
  // negative number (n<0) : NEGATIVE
  // positivie number
  onchange: function() {
      var num = this.getFieldValue('NUM');
      if (num == 0) {
          this.changeOutput('Number');
      }
      else if (num % 1 === 0 || num.match(/-/)) {
          if (num > 0) {
              this.changeOutput('INT');
          }
          else {
              this.changeOutput('NEGATIVE');
          }
      }
      else {
          this.changeOutput('DOUBLE');
      }
  }
};

Blockly.Blocks['math_arithmetic'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
         [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
         [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
         [Blockly.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE']];
    this.setColour(240);
    this.setOutput(true, 'Number');
    this.appendValueInput('A')
        .setCheck(['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_FLOAT', 'VAR_DOUBLE', 'Aster', 'VAR_STR', 'Array']);
    this.appendValueInput('B')
        .setCheck(['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_FLOAT', 'VAR_DOUBLE', 'Aster', 'VAR_STR', 'Array'])
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
      this.tag = Blockly.Msg.TAG_MATH_ARITHMETIC;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE
      };
      return TOOLTIPS[mode];
    });
  },
  // Change block output when both inputs are integers
  onchange: function() {
      if (!this.getInputTargetBlock('A') || !this.getInputTargetBlock('B')) {
          return;
      }
      var int = false;
      var intTypes = ['INT', 'VAR_INT', 'VAR_UNINT', 'NEGATIVE'];
      var a_out = this.getInputTargetBlock('A').getOutput();
      for (var i = 0; i < a_out.length; i++) {
        if (intTypes.indexOf(a_out[i]) != -1) {
            int = true;
            break;
        }
      }
      if (int) {
        var b_out = this.getInputTargetBlock('B').getOutput();
        for (var i = 0; i < b_out.length; i++) {
            if (intTypes.indexOf(b_out[i]) != -1) {
                this.changeOutput('INT');
                return;
            }
        }
      }
      this.changeOutput('Number');
      return;
  }
};

Blockly.Blocks['math_modulo'] = {
  /**
   * Block for remainder of a division.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(240);
    this.setOutput(true, 'Number');
    this.interpolateMsg(Blockly.Msg.MATH_MODULO_TITLE,
                        ['DIVIDEND', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'Aster'], Blockly.ALIGN_RIGHT],
                        ['DIVISOR', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'Aster'], Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_MODULO_TOOLTIP);
      this.tag = Blockly.Msg.TAG_MATH_MODULO;
  },
};

//Down from here, #include math.h 관련 block

Blockly.Blocks['library_math_abs'] = {
    init: function() {
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.interpolateMsg(Blockly.Msg.MATH_ABS_TITLE,
            ['VAR', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS);
        this.tag = Blockly.Msg.TAG_MATH_ABS;
    },

};

Blockly.Blocks['library_math_trig'] = {
    /**
     * Block for trigonometry operators.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS =
            [[Blockly.Msg.MATH_TRIG_SIN, 'SIN'],
                [Blockly.Msg.MATH_TRIG_COS, 'COS'],
                [Blockly.Msg.MATH_TRIG_TAN, 'TAN']];
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.appendValueInput('NUM')
            .setCheck(['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'])
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('OP');
            var TOOLTIPS = {
                'SIN': Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                'COS': Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                'TAN': Blockly.Msg.MATH_TRIG_TOOLTIP_TAN
            };
            return TOOLTIPS[mode];
        });
        this.tag = Blockly.Msg.TAG_MATH_TRIG;
    },

};

Blockly.Blocks['library_math_logs'] = {
    /**
     * Block for advanced math operators with single operand.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS = [
                [Blockly.Msg.MATH_ABS_TITLE, 'ABS'],
                [Blockly.Msg.MATH_SQRT_TITLE, 'SQRT'],
                [Blockly.Msg.MATH_EXP_TITLE, 'EXP'],
                [Blockly.Msg.MATH_TRIG_LOG, 'LOG'],
                [Blockly.Msg.MATH_TRIG_LOG10, 'LOG10'],
                [Blockly.Msg.MATH_TRIG_LOG2, 'LOG2']];
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.appendValueInput('NUM')
            .setCheck(['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'])
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('OP');
            var TOOLTIPS = {
                'ABS': Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                'EXP': Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
                'SQRT': Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                'LOG': Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG,
                'LOG10': Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
                'LOG2': Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG2
            };
            return TOOLTIPS[mode];
        });
        this.tag = Blockly.Msg.TAG_MATH_LOGS;
    },

};

Blockly.Blocks['library_math_pow'] = {
    init: function() {
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.interpolateMsg(Blockly.Msg.MATH_POW_TITLE,
            ['BASE', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            ['EXPO', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_POW);
        this.tag = Blockly.Msg.TAG_MATH_POW;
    },

};

Blockly.Blocks['library_math_exp'] = {
    init: function() {
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.interpolateMsg(Blockly.Msg.MATH_EXP_TITLE,
            ['EXPO', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP);
        this.tag = Blockly.Msg.TAG_MATH_EXP;
    },

};

Blockly.Blocks['library_math_sqrt'] = {
    init: function() {
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.interpolateMsg(Blockly.Msg.MATH_SQRT_TITLE,
            ['VAR', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT);
        this.tag = Blockly.Msg.TAG_MATH_SQRT;
    },

};

Blockly.Blocks['library_math_round'] = {
    /**
     * Block for rounding functions.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS =
            [[Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, 'ROUND'],
                [Blockly.Msg.MATH_ROUND_OPERATOR_CEIL, 'CEIL'],
                [Blockly.Msg.MATH_ROUND_OPERATOR_FLOOR, 'FLOOR'],
                [Blockly.Msg.MATH_ROUND_OPERATOR_TRUNC, 'TRUNC']];
        this.setColour(320);
        this.setOutput(true, 'Number');
        this.appendValueInput('NUM')
            .setCheck(['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'])
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_ROUND;
    },

};

Blockly.Blocks['library_math_assignment_by'] = {
    /**
     * Block for rounding functions.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS =
            [[Blockly.Msg.MATH_ASSIGNMENT_BY_INCREMENT, 'INCREMENT'],
              [Blockly.Msg.MATH_ASSIGNMENT_BY_DECREMENT, 'DECREMENT'],
              [Blockly.Msg.MATH_ASSIGNMENT_BY_MULTIPLY, 'MULTIPLY'],
              [Blockly.Msg.MATH_ASSIGNMENT_BY_DIVIDE, 'DIVIDE'],
              [Blockly.Msg.MATH_ASSIGNMENT_BY_MODULO, 'MODULO']];
        this.setColour(320);
        this.setPreviousStatement(true, ["STATEMENT", "SET"]);
        this.setNextStatement(true, ["STATEMENT", "SET"]);
        this.interpolateMsg(
            // TODO: Combine these messages instead of using concatenation.
            '%1 %2 by %3',
            ['OP', new Blockly.FieldDropdown(OPERATORS, null, this)],
            ['VAR', new Blockly.FieldVariable(Blockly.Msg.SELECT_MENU, null, this)],
            ['VALUE', null, Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setTooltip(Blockly.Msg.MATH_ASSIGNMENT_BY_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_ASSIGNMENT_BY;
    },
    //when the block is changed,
    onchange: Blockly.Blocks.forPlacementCheck,
}

Blockly.Blocks['library_math_numcheck'] = {
    init: function() {
        var CONDITION =
            [
                [Blockly.Msg.MATH_NUMCHECK_ISFINITE, 'ISFINITE'],
                [Blockly.Msg.MATH_NUMCHECK_ISINF, 'ISINF'],
                [Blockly.Msg.MATH_NUMCHECK_SIGNBIT, 'SIGNBIT'],
                [Blockly.Msg.MATH_NUMCHECK_ISNAN, 'ISNAN']
            ];
        this.setColour(320);
        this.setOutput(true, 'Boolean');
        this.interpolateMsg(Blockly.Msg.MATH_NUMCHECK_TITLE,
            ['VAR', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            ['CONDITIONS', new Blockly.FieldDropdown(CONDITION)],
            Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MATH_NUMCHECK_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_NUMCHECK;
    },

};

Blockly.Blocks['library_math_numcompare'] = {
    init: function() {
        var CONDITION =
            [
                [Blockly.Msg.MATH_NUMCOMPARE_ISGREATER, 'ISGREATER'],
                [Blockly.Msg.MATH_NUMCOMPARE_ISLESS, 'ISLESS'],
                [Blockly.Msg.MATH_NUMCOMPARE_ISGREQ, 'ISGREQ'],
                [Blockly.Msg.MATH_NUMCOMPARE_ISLEEQ, 'ISLEEQ'],
                [Blockly.Msg.MATH_NUMCOMPARE_ISLEGR, 'ISLEGR'],
                [Blockly.Msg.MATH_NUMCOMPARE_ISUNORDER, 'ISUNORDER']
            ];
        this.setColour(320);
        this.setOutput(true, 'Boolean');
        this.interpolateMsg(Blockly.Msg.MATH_NUMCOMPARE_TITLE,
            ['VAR1', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            ['VAR2', ['Number', 'INT', 'NEGATIVE', 'Variable', 'VAR_INT', 'VAR_UNINT', 'DOUBLE', 'VAR_DOUBLE', 'VAR_FLOAT', 'Aster'], Blockly.ALIGN_RIGHT],
            ['CONDITIONS', new Blockly.FieldDropdown(CONDITION)],
            Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MATH_NUMCOMPARE_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_NUMCOMPARE;
    },

};