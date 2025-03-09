import Team from '../js/app.js';
import ErrorRepository from "../js/ErrorRepository";




test('from lector', () => {
    const team = new Team();
    team.add("Yan")
    expect(() => team.add("Yan")).toThrow('This character is already in the team.');
});

test("no throw error with different characters", () => {
    const team = new Team();
    team.add("user")
    expect(() => team.add("man")).not.toThrow();
})

test("add all without duplicate", () => {
    const team = new Team();
    team.addAll("Yan","Yan","Petr")
    expect(team.toArray()).toEqual(["Yan", "Petr",]);
})

test('add all without throw', () => {
    const myTeam = new Team();
    expect(() => {
        myTeam.addAll("Yan","Yan","Petr");
    }).not.toThrow();
});

test('convert to Array', () => {
    const team = new Team();
    team.add("Yan")
    team.add("Petr");
    expect(team.toArray()).toEqual(["Yan", "Petr",]);
})


test('should return the error message for a known code', () => {
    const errorRepo = new ErrorRepository();
    errorRepo.addError(404,'Not Found')
    expect(errorRepo.translate(404)).toBe('Not Found')
})
test('should return "Unknown error" for an unknown code', () => {
    const errorRepo = new ErrorRepository();
    expect(errorRepo.translate(404)).toBe('Unknown error')
})