const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add 2 Numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should greet with name', () => {
    const greeting = generateGreeting('Paavas');
    expect(greeting).toBe('Hello Paavas!');
})

test('Should greet with no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
})