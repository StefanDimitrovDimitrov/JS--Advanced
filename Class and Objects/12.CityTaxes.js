function city(name, population, treasury){
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent){},
        applyRecession(percent){},

    };

    return city;
}

city(
    'Tortuga',
    7000,
    15000
    )