import { BaseComponent } from "../../viewi/core/BaseComponent";

class TestComponent extends BaseComponent {
    _name = 'TestComponent';
    name = "MyName";
    _name2_Test = "MyName_2";
    empty = "";
    null = null;
    url = "\/home";
    attr = "title";
    event = "(click)";
    arr = ["a", "b", "c"];
    arrWithKeys = {"a": "Apple", "b": "Orange", "c": "Lemon"};
    arrNested = {"a": {"a": "Apple", "b": "Orange", "c": "Lemon"}, "b": {"a": "Apple", "b": "Orange", "c": "Lemon"}, "c": {"a": "Apple", "b": "Orange", "c": "Lemon"}};
    ifValue = true;
    ifElseValue = true;
    nestedIf = true;

    getName(name) {
        var sum = (1 + 5) * 10;
        return name ?? "DefaultName";
    }

    addTodo() {
        this.arrNested = {"a": {"a": "Apple", "b": "Orange", "c": "Lemon"}, "d": {"R": "Rat", "T": "Dog", "G": "Cat"}, "b": {"a": "Apple", "b": "Orange", "c": "Lemon"}};
        // Test cases
        // $this->arr = ['E', 'a'];
        // $this->arr = ['c', 'b', 'a'];
        // $this->arr = ['c', 'b', 'c', 'c'];
        // $this->arr = [...$this->arr, 'Viewi', ...$this->arr];
        // $this->arr = ['g', 'b', 'a', 'c'];
    }

    onEvent(event) {
        event.preventDefault();
    }

    toggleIf() {
        this.ifValue = !this.ifValue;
        this.arr = this.ifValue ? ["a", "b", "c"] : ["x", "b", "r"];
    }

    toggleElseIf() {
        this.ifElseValue = !this.ifElseValue;
    }
}

export const TestComponent_x = [
    function (_component) { return "Tag test " + _component.name + " " + _component._name2_Test; },
    function (_component) { return "\n    $notAVar " + _component.getName() + " " + _component.getName(_component.name) + "\n    Nested\n    "; },
    function (_component) { return _component.url; },
    function (_component) { return _component.empty; },
    function (_component) { return _component.null; },
    function (_component) { return _component.attr; },
    function (_component) { return expression.bind(_component); },
    function (_component) { return _component.event; },
    function (_component) { return _component.onEvent.bind(_component); },
    function (_component) { return "custom " + _component.name + " slot"; },
    function (_component) { return "Custom " + _component.name + " Slot"; },
    function (_component) { return "Custom " + _component.name + " slot\n        "; },
    function (_component) { return "Custom header " + _component.name + " inside div"; },
    function (_component) { return "Custom " + _component.name + " footer"; },
    function (_component) { return _component.addTodo.bind(_component); },
    function (_component) { return _component.nestedIf; },
    function (_component) { return _component.name; },
    function (_component) { return _component.arr; },
    function (_component, _key1, item) { return _component.ifElseValue; },
    function (_component, _key1, item) { return item; },
    function (_component, _key1, item) { return item; },
    function (_component, _key1, item) { return item; },
    function (_component, _key1, item) { return _component.nestedIf; },
    function (_component, _key1, item) { return _component.name; },
    function (_component) { return _component.arr; },
    function (_component, index, item) { return index; },
    function (_component, index, item) { return item; },
    function (_component, index, item) { return index + ". "; },
    function (_component, index, item) { return item; },
    function (_component, index, item) { return item; },
    function (_component) { return _component.arrWithKeys; },
    function (_component, index, item) { return index; },
    function (_component, index, item) { return item; },
    function (_component, index, item) { return index + ": "; },
    function (_component, index, item) { return index; },
    function (_component, index, item) { return item; },
    function (_component, index, item) { return item; },
    function (_component) { return _component.ifValue; },
    function (_component) { return _component.arrNested; },
    function (_component, key, subArr) { return subArr; },
    function (_component, key, subArr, subKey, subItem) { return key; },
    function (_component, key, subArr, subKey, subItem) { return subKey; },
    function (_component, key, subArr, subKey, subItem) { return subItem; },
    function (_component, key, subArr, subKey, subItem) { return key + ". " + subKey + ". " + subItem; },
    function (_component) { return _component.arrNested; },
    function (_component, key, subArr) { return key === "b"; },
    function (_component, key, subArr) { return subArr; },
    function (_component, key, subArr, subKey, subItem) { return key; },
    function (_component, key, subArr, subKey, subItem) { return subKey; },
    function (_component, key, subArr, subKey, subItem) { return subItem; },
    function (_component, key, subArr, subKey, subItem) { return key + ". " + subKey + ". " + subItem; },
    function (_component) { return _component.toggleIf.bind(_component); },
    function (_component) { return _component.toggleElseIf.bind(_component); },
    function (_component) { return function (event) { _component.nestedIf = !_component.nestedIf; }; },
    function (_component) { return function (event) { _component.name = "Viewi Junior"; }; },
    function (_component) { return _component.ifValue; },
    function (_component) { return _component.ifElseValue; },
    function (_component) { return _component.ifValue; },
    function (_component) { return _component.ifElseValue; },
    function (_component) { return _component.arr; },
    function (_component, _key2, item) { return item; }
];

export { TestComponent }