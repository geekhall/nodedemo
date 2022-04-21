function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    if (Math.random() > 0.5)
        return {
            swim: function () {
                console.log("I am a Fish, I can swim");
            }
        };
    else
        return {
            fly: function () {
                console.log("I am a Bird, I can fly");
            }
        };
}
var pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
var zoo = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()];
var underWater1 = zoo.filter(isFish);
var underWater2 = zoo.filter(isFish);
var underWater3 = zoo.filter(isFish);
// The predicate may need repeating for more complex examples
var underWater4 = zoo.filter(function (pet) {
    if (pet.name === "sharkey")
        return false;
    return isFish(pet);
});
zoo.forEach(function (animal, index) {
    console.log("No. ".concat(index, " animal is ").concat(isFish(animal) ? "a fish" : "not a fish"));
});
