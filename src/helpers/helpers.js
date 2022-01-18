const KEY = 'tasks';

export function setLocalStorage(value) {
    localStorage.setItem(KEY, JSON.stringify(value));
}

export function getLocalStorage() {
    return JSON.parse(localStorage.getItem(KEY))
}

export function randomNumber(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}