$(document).ready(function () {
  const formSteps = $('.form-step');
  const progressBar = $('#progress-bar');
  const progressText = $('#progress-text');
  let currentStep = 0;
  let totalSteps = formSteps.length;

  let selectedService = '';

  function showStep(step) {
      formSteps.removeClass('active').eq(step).addClass('active');
      updateProgressBar(step);
      toggleButtons(step);
      $(window).scrollTop(0); 
  }

  function updateProgressBar(step, extraPercentage = 0) {
      let percentage = 0;

      switch (step) {
          case 0:
              percentage = 0;
              break;
          case 1:
              percentage = 20;
              break;
          case 2:
              percentage = selectedService === 'buyer' ? 40 : 80;
              break;
          case 3:
              percentage = selectedService === 'buyer' ? 60 : 60;
              break;
          case 4:
              percentage = 80;
              break;
          case 5:
              percentage = 100;
              break;
          default:
              percentage = 0;
      }

      percentage += extraPercentage;

      if (percentage > 100) {
          percentage = 100;
      }

      progressBar.css('width', `${percentage}%`);
      progressText.text(`${percentage}%`);

      if (percentage === 100) {
          $('#done-section').show();
      } else {
          $('#done-section').hide();
      }
  }

  function toggleButtons(step) {
      $('#common-buttons button').hide();
      $('#go-to-dashboard-btn').hide();
      $('#back-btn').hide();

      if (step === 0) {
          $('#next-step-btn').show();
          $('#back-btn').show();
      } else if (step === 1) {
          $('#go-to-dashboard-btn').show();
          $('#select-buyer').show();
          $('#select-seller').show();
      } else {
          $('#common-buttons button').show();
      }
  }

  function nextStep() {
      if (currentStep < totalSteps - 1) {
          currentStep++;
          showStep(currentStep);
      }
  }

  function prevStep() {
      if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
      }
  }

  function updateStep3Content() {
      const step3Heading = $('#step3-heading');
      const dynamicBtn = $('#dynamic-btn');
      const buyerForm = $('#buyer-form');
      const sellerForm = $('#seller-form');

      buyerForm.hide();
      sellerForm.hide();

      if (selectedService === 'buyer') {
          step3Heading.text('Selling My Services to Property Buyers');
          buyerForm.show();
          dynamicBtn.text('Next: Sell Specific Service');
      } else if (selectedService === 'seller') {
          step3Heading.text('Selling My Services to Property Sellers');
          sellerForm.show();
      }
  }

  function updateStep4Content() {
      const step4Heading = $('#step4-heading');
      const actionBtn = $('#action-btn');

      if (selectedService === 'buyer') {
          step4Heading.text('Selling Specific Services to Property Buyers');
          actionBtn.text('Now Set Up Your Seller Representation Model');
      }
  }

  $('#next-step-btn').on('click', function () {
      nextStep();
      $(window).scrollTop(0); 
  });

  $('#prev-step-btn').on('click', function () {
      prevStep();
      $(window).scrollTop(0); 
  });

  $('#select-buyer').on('click', function () {
      selectedService = 'buyer';
      totalSteps = 6;
      currentStep = 2;
      updateStep3Content();
      showStep(currentStep);
      $(window).scrollTop(0); 
  });

  $('#select-seller').on('click', function () {
      selectedService = 'seller';
      totalSteps = 6;
      currentStep = 2;
      updateStep3Content();
      showStep(currentStep);
      $(window).scrollTop(0); 
  });

  $('#dynamic-btn').on('click', function () {
      nextStep();
      updateStep4Content();
      $(window).scrollTop(0); 
  });

  $('#action-btn').on('click', function () {
      nextStep();
      $(window).scrollTop(0); 
  });

  $('#save-step-btn1').on('click', function () {
      nextStep();
      $(window).scrollTop(0); 
  });

  $('#save-step-btn2').on('click', function () {
      updateProgressBar(5); 
      showStep(5);          
      $(window).scrollTop(0); 
  });

  $('#go-to-dashboard-btn').on('click', function () {
      currentStep = 0;  
      showStep(currentStep);
      updateProgressBar(0); 
      $(window).scrollTop(0); 
  });

  showStep(currentStep);
});












// buyer form checkbox
const checkbox = document.querySelector('#commissionCheckbox');
const commissionInputs = document.querySelectorAll('.commission-input');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    commissionInputs.forEach(input => {
      input.disabled = false;
    });
  } else {
    commissionInputs.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
  }
});




const propertiesValueCheckBox = document.querySelector('#propertiesValue');
const propertiesValueAmount = document.querySelectorAll('.propertiesValueAmount');

propertiesValueCheckBox.addEventListener('change', function () {
  if (this.checked) {
    propertiesValueAmount.forEach(input => {
      input.disabled = false;
    });
  } else {
    propertiesValueAmount.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
  }
});


const hourlyRate = document.querySelector('#hourlyRate');
const hourlyRateInput = document.querySelectorAll('.hourlyRateInput');

hourlyRate.addEventListener('change', function () {
  if (this.checked) {
    hourlyRateInput.forEach(input => {
      input.disabled = false;
    });
  } else {
    hourlyRateInput.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
  }
})



// seller form checkbox

const sellercheckbox = document.querySelector('#sellercommissionCheckbox');
const sellercommissionInputs = document.querySelectorAll('.sellercommission-input');

sellercheckbox.addEventListener('change', function () {
  if (this.checked) {
    sellercommissionInputs.forEach(input => {
      input.disabled = false;
    });
  } else {
    sellercommissionInputs.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
  }
});

const sellerpropertiesValueCheckBox = document.querySelector('#sellerpropertiesValue');
const sellerpropertiesValueAmount = document.querySelectorAll('.sellerpropertiesValueAmount');

sellerpropertiesValueCheckBox.addEventListener('change', function () {
  if (this.checked) {
    sellerpropertiesValueAmount.forEach(input => {
      input.disabled = false;
    });
  } else {
    sellerpropertiesValueAmount.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
  }
});

const sellerhourlyRate = document.querySelector('#sellerhourlyRate');
const sellerhourlyRateInput = document.querySelectorAll('.sellerhourlyRateInput');

sellerhourlyRate.addEventListener('change', function () {
  if (this.checked) {
    sellerhourlyRateInput.forEach(input => {
      input.disabled = false;
    });
  } else {
    sellerhourlyRateInput.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
  }
})


// buyer table checkbox

document.addEventListener('DOMContentLoaded', function() {
  [1, 2, 3, 4, 5, 6, 7].forEach(num => {
    const buyerCheckBox = document.querySelector(`#buyerCheckBox${num}`);
    const buyerInputs = document.querySelectorAll(`.buyerInput${num}`);

    if (buyerCheckBox) {
      buyerCheckBox.addEventListener('change', function () {
        buyerInputs.forEach(input => {
          input.disabled = !this.checked;
          if (!this.checked) {
            input.value = '';
          }
        });
      });
    }
  });
});



// seller table checkbox

document.addEventListener('DOMContentLoaded', function() {
  [1, 2, 3, 4, 5, 6, 7].forEach(num => {
    const sellerCheckBox = document.querySelector(`#sellerCheckBox${num}`);
    const sellerInputs = document.querySelectorAll(`.sellerInput${num}`);

    if (sellerCheckBox) { 
      sellerCheckBox.addEventListener('change', function () {
        sellerInputs.forEach(input => {
          input.disabled = !this.checked;
          if (!this.checked) {
            input.value = '';
          }
        });
      });
    }
  });
});

