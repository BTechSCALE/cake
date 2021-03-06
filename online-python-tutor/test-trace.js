var trace = {
    "code": "// Example C++ code for OPT\n// From: http://www.inference.phy.cam.ac.uk/teaching/comput/C++/examples/SortReference2.shtml\n\n// SortReference2.cc\n// Program to sort two numbers using call by reference. \n// Smallest number is output first.\n\n#include <iostream>\nusing namespace std;\n\n// Function prototype for call by reference using pointers\n// see http://www-h.eng.cam.ac.uk/help/tpl/languages/C++/argsC++.html\n// for further advice.\nvoid swap(float &x, float &y);\nvoid swap2(float *px, float *py);\nvoid swap2b(float *px, float *py);\n\nint main()\n{\n   float a, b;\n\n   a = 2.71;\n   b = 3.14;\n   \n   swap(a, b);\n   swap2(&a, &b);\n   swap2b(&a, &b);\n\n   return 0;\n}\n\n// A function definition for call by reference\n// The variables x and y will have their values changed.\n\nvoid swap(float &x, float &y)\n// Swaps x and y data of calling function\n{\n   float temp;\n\n   temp = x;\n   x = y;\n   y = temp;\n}\n\nvoid swap2(float *px, float *py) // Here the arguments are pointers\n// Swaps x and y data of calling function\n{\n   float temp;\n\n   temp = *px;  // to find the value associated with the pointer px, use *px\n   *px = *py;\n   *py = temp;\n}\n\nvoid swap2b(float *px, float *py)\n// Swaps x and y data of calling function\n{\n   float temp;\n\n   temp = px[0];  // A synonym for *px is px[0]\n   px[0] = py[0];\n   py[0] = temp;\n}",
    "trace": [
        {
            "event": "step_line",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 22,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            "<UNINITIALIZED>"
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 22,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 23,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 23,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 25,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 23,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "call",
            "func_name": "swap(float&, float&)",
            "globals": {},
            "heap": {},
            "line": 37,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 25,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "x": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "<UNINITIALIZED>"
                        ],
                        "y": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap(float&, float&)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 37,
                    "ordered_varnames": [
                        "x",
                        "y"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap(float&, float&)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap(float&, float&)",
            "globals": {},
            "heap": {},
            "line": 40,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 25,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            "<UNINITIALIZED>"
                        ],
                        "x": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "y": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap(float&, float&)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 40,
                    "ordered_varnames": [
                        "temp",
                        "x",
                        "y"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap(float&, float&)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap(float&, float&)",
            "globals": {},
            "heap": {},
            "line": 41,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 25,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            2.71
                        ],
                        "x": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "y": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap(float&, float&)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 41,
                    "ordered_varnames": [
                        "temp",
                        "x",
                        "y"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap(float&, float&)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap(float&, float&)",
            "globals": {},
            "heap": {},
            "line": 42,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 25,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            2.71
                        ],
                        "x": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "y": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap(float&, float&)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 42,
                    "ordered_varnames": [
                        "temp",
                        "x",
                        "y"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap(float&, float&)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "return",
            "func_name": "swap(float&, float&)",
            "globals": {},
            "heap": {},
            "line": 43,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 25,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "x": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "y": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap(float&, float&)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 43,
                    "ordered_varnames": [
                        "x",
                        "y"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap(float&, float&)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 26,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 26,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "call",
            "func_name": "swap2(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 47,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 26,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "<UNINITIALIZED>"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 47,
                    "ordered_varnames": [
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap2(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 50,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 26,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ],
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 50,
                    "ordered_varnames": [
                        "temp",
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap2(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 51,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 26,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ],
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 51,
                    "ordered_varnames": [
                        "temp",
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap2(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 52,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 26,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ],
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 52,
                    "ordered_varnames": [
                        "temp",
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "return",
            "func_name": "swap2(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 53,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 26,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 53,
                    "ordered_varnames": [
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 27,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 27,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "call",
            "func_name": "swap2b(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 57,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 27,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "<UNINITIALIZED>"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2b(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 57,
                    "ordered_varnames": [
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2b(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap2b(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 60,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 27,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ],
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            "<UNINITIALIZED>"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2b(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 60,
                    "ordered_varnames": [
                        "temp",
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2b(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap2b(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 61,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            2.71
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 27,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ],
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2b(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 61,
                    "ordered_varnames": [
                        "temp",
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2b(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "swap2b(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 62,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            3.14
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 27,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ],
                        "temp": [
                            "C_DATA",
                            "0xFFF000BBC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2b(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 62,
                    "ordered_varnames": [
                        "temp",
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2b(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "return",
            "func_name": "swap2b(float*, float*)",
            "globals": {},
            "heap": {},
            "line": 63,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": false,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 27,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                },
                {
                    "encoded_locals": {
                        "px": [
                            "C_DATA",
                            "0xFFF000BA8",
                            "pointer",
                            "0xFFF000BD8"
                        ],
                        "py": [
                            "C_DATA",
                            "0xFFF000BA0",
                            "pointer",
                            "0xFFF000BDC"
                        ]
                    },
                    "frame_id": "0xFFF000BC0",
                    "func_name": "swap2b(float*, float*)",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 63,
                    "ordered_varnames": [
                        "px",
                        "py"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "swap2b(float*, float*)_0xFFF000BC0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "step_line",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 29,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {
                        "a": [
                            "C_DATA",
                            "0xFFF000BD8",
                            "float",
                            3.14
                        ],
                        "b": [
                            "C_DATA",
                            "0xFFF000BDC",
                            "float",
                            2.71
                        ]
                    },
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 29,
                    "ordered_varnames": [
                        "a",
                        "b"
                    ],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        },
        {
            "event": "return",
            "func_name": "main",
            "globals": {},
            "heap": {},
            "line": 30,
            "ordered_globals": [],
            "stack_to_render": [
                {
                    "encoded_locals": {},
                    "frame_id": "0xFFF000BE0",
                    "func_name": "main",
                    "is_highlighted": true,
                    "is_parent": false,
                    "is_zombie": false,
                    "line": 30,
                    "ordered_varnames": [],
                    "parent_frame_id_list": [],
                    "unique_hash": "main_0xFFF000BE0"
                }
            ],
            "stdout": ""
        }
    ]
};