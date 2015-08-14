CNS = new Object();

CNS.INIT = init_app;

CNS.VARS = {};

CNS.VARS.HIGH_RISK_THRESHOLD = 3;

CNS.FUNCTIONS = {};

CNS.FUNCTIONS.AGE = calculate_age;
CNS.FUNCTIONS.AJAX_SETUP = ajax_setup;
CNS.FUNCTIONS.TIME_UNTIL = time_until;
CNS.FUNCTIONS.HR_DATETIME = human_readable_datetime;
CNS.FUNCTIONS.HR_NAME = human_readable_name;

CNS.PATIENT_FILE = "./patients.json";
CNS.PATIENT_INFO = [];
CNS.PATIENT_NAMES = [];

CNS.TREATMENTS_FILE = "./treatments.json";

CNS.STACKER = {};

CNS.STACKER.INIT = init_stacker;
CNS.STACKER.LOAD_DATA = load_stacker_data;
CNS.STACKER.SEARCH_MANAGER = stacker_search_manager;

CNS.STACKER.HTML = {};
CNS.STACKER.HTML.WELCOME = load_welcome_content;
CNS.STACKER.HTML.STACKER = load_stacker_content;

CNS.STACKER.LOAD_NAMES = load_names;
CNS.STACKER.AUTOCOMPLETE = load_autocomplete;

CNS.STACKER.CHART = {};
CNS.STACKER.CHART.INIT = init_timeline;
CNS.STACKER.CHART.DRAW = draw_timeline;

CNS.PATIENTS = {};
CNS.PATIENTS.LOAD_DATA = load_patients_list;

CNS.TREATMENTS = {};
CNS.TREATMENTS.LOAD_DATA = load_treatments_list;