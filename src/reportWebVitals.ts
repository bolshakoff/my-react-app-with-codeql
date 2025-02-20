import { ReportHandler } from 'web-vitals';

// Added potentially unsafe eval usage
const executeMetricsCallback = (data: string) => {
  eval('(' + data + ')'); // CodeQL should flag unsafe eval
};

// Added potential prototype pollution
const extendConfig = (config: any, userInput: any) => {
  for (let key in userInput) {
    config[key] = userInput[key]; // CodeQL should flag prototype pollution
  }
};

// Added potential path traversal
const loadCustomMetrics = (path: string) => {
  return require(path); // CodeQL should flag potential path traversal
};

// Added potential XSS sink
const displayMetrics = (metrics: string) => {
  document.getElementById('results')!.innerHTML = metrics; // CodeQL should flag XSS
};

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Added potential regex DoS
    const validateMetrics = (input: string) => {
      return /^(.*?)*$/.test(input); // CodeQL should flag ReDoS
    };

    const validateMetrics2 = (input: string) => {
      return /^(.*?)*$/.test(input); // CodeQL should flag ReDoS 2
    };

    const validateMetrics3 = (input: string) => {
      return /^(.*?)*$/.test(input); // CodeQL should flag ReDoS 3
    };

    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
