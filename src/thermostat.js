class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = 0;
        this.usage = "default";
    }

    powerSavingOn() {
        this.powerSavingMode = 1
    }

    powerSavingOff() {
        this.powerSavingMode = 0
    }

    resetTemp() {
        this.temperature = 20;
        return this.temperature;
    }

    increaseTemp(number) {
        this.temperature += number;
        if (this.powerSavingMode == 0 && this.temperature > 32) {
            console.log("The max temperature is 32, temperature set to 32 degrees.");
            this.temperature = 32;
            return this.temperature;
        } else if (this.powerSavingMode == 1 && this.temperature > 25) {
            console.log("The max temperature with power saving mode engaged is 25, temperature set to 25 degrees.");
            this.temperature = 25
            return this.temperature;
        } else {
            return this.temperature;
        }
    }

    decreaseTemp(number) {
        this.temperature -= number;
        if (this.temperature < 10) {
            console.log("The min temperature is 10, temperature set to 10 degrees.");
            this.temperature = 10;
            return this.temperature;
        } else {
            return this.temperature;
        }
    }

    energyUsage() {
        if (this.temperature < 18) {
            this.usage = "Low Usage";
            return this.usage;
        } else if (this.temperature <= 25) {
            this.usage = "Medium Usage";
            return this.usage;
        } else {
            this.usage = "High Usage";
            return this.usage;
        }
    }
}
