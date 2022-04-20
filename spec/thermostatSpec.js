describe('Thermostat', function () {

    let thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    describe('thermostat starts at 20 degrees', function () {
        it('begins at 20 degrees', function () {
            expect(thermostat.temperature).toBe(20);
        });
    });

    describe('increase temperature by number', function () {
        it('able to increase temperature', function () {
            expect(thermostat.increaseTemp(2)).toBe(22);
        });
    });

    describe('decrease temperature by number', function () {
        it('able to decrease temperature', function () {
            expect(thermostat.decreaseTemp(2)).toBe(18);
        });
    });


    describe('cannot decrease temp lower than 10', function () {
        it('sets to 10 degrees by default if temp set below 10', function () {
            expect(thermostat.decreaseTemp(15)).toBe(10);
        });
    });

    describe('cannot increase temp higher than 32 when power saving mode is OFF', function () {
        it('sets to 32 degrees by default if temp set above 32, and power saving mode is OFF.', function () {
            thermostat.powerSavingOff()
            expect(thermostat.increaseTemp(15)).toBe(32);
        });
    });

    describe('cannot increase temp higher than 25 when power saving mode is ON', function () {
        it('sets to 25 degrees by default if temp set above 25, and power saving mode is ON.', function () {
            thermostat.powerSavingOn()
            expect(thermostat.increaseTemp(20)).toBe(25);
        });
    });

    describe('RESETS temperature to the default of 20 degrees', function () {
        it('RESETS temperature to 20 degrees, regardless of previous selections.', function () {
            expect(thermostat.increaseTemp(5)).toBe(25);
            expect(thermostat.resetTemp()).toBe(20);
        });
    });
    describe('LOW USAGE', function () {
        it('Sets usage to low if temperature is lower than 18 degrees.', function () {
            expect(thermostat.decreaseTemp(5)).toBe(15);
            expect(thermostat.energyUsage()).toBe("Low Usage");
        });
    });
    describe('MEDIUM USAGE', function () {
        it('Sets usage to medium if temperature is bewteen 18 and 25 degrees.', function () {
            expect(thermostat.increaseTemp(2)).toBe(22);
            expect(thermostat.energyUsage()).toBe("Medium Usage");
        });
    });
    describe('HIGH USAGE', function () {
        it('Sets usage to high if temperature is over 25 degrees.', function () {
            expect(thermostat.increaseTemp(10)).toBe(30);
            expect(thermostat.energyUsage()).toBe("High Usage");
        });
    });


});