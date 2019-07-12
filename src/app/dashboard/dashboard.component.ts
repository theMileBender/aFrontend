import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pollutants: any;

  selectedPollutant: any;
  aqiToConcentrationForm: FormGroup;

  constructor() { 
    this.pollutants = ["PM2.5 - Particulate <2.5 microns (24hr avg)" ,"PM10 - Particulate <10 microns (24hr avg)" ,"CO - Carbon Monoxide (8hr avg) ,SO2 - Sulfur Dioxide (1hr avg)" , "SO2 - Sulfur Dioxide (24hr avg) , O3 - Ozone (8hr avg)" , "O3 - Ozone (1hr avg) , NO2 - Nitrogen Dioxide (1hr avg)"];
  }

  ngOnInit() {

    this.aqiToConcentrationForm = new FormGroup({
      pollutant: new FormControl('', [
          Validators.required
      ]),
      aqi: new FormControl('', {}),
      concentration: new FormControl('', {}),
      units: new FormControl('', {}),
      aqiCategory: new FormControl('', {}),
      sensitiveGroups: new FormControl('', {}),
      healthEffects: new FormControl('', {}),
      cautionaryStatements: new FormControl('', {})
    });
    
  }

  resetForm() {
    console.log("Resetting form")
    this.aqiToConcentrationForm.reset();
  }

  convertAqiToConcentration() {
    if(this.aqiToConcentrationForm.valid) {
      let data = {
        pollutant: this.aqiToConcentrationForm.value.pollutant,
        aqi: this.aqiToConcentrationForm.value.aqi,
        units: this.aqiToConcentrationForm.value.units
      }
      console.log("In conversion method")
    } else {
      this.validateAllFormFields(this.aqiToConcentrationForm);
    }
  }

  convertConcentrationToAqi() {
    if(this.aqiToConcentrationForm.valid) {
      let data = {
        pollutant: this.aqiToConcentrationForm.value.pollutant,
        concentration: this.aqiToConcentrationForm.value.concentration,
        units: this.aqiToConcentrationForm.value.units
      }
      console.log("In conversion method")
      // Make api call and fetch data
      // Patch the results back to the form
    } else {
      this.validateAllFormFields(this.aqiToConcentrationForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
}

}
