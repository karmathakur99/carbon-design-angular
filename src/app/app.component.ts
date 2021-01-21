import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Carbon Components Angular";
  align = "start";
  items = [
    {
      content: "one"
    },
    {
      content: "two"
    },
    {
      content: "three"
    },
    {
      content: "four"
    }
  ];

  selectedAccordian(ev) {
    console.log("selected", ev);
  }

  invalidDropdown: boolean = false;
  sizeDropdown = "md";
  invalidTextDropdown = "This is not a validation text";
  disabledDropdown = false;
  labelDropdown = "Dropdown label";
  helperTextDropdown = "Optional helper text.";
  itemsDropdown = [
    { content: "one", selected: false },
    { content: "two", selected: false },
    { content: "three", selected: false },
    { content: "four", selected: false }
  ];
  selectedDropdownItem = "four";

  ngOnInit() {
    this.selectOnlyOneValue(this.selectedDropdownItem);
  }

  selectOnlyOneValue(val) {
    for (var i in this.itemsDropdown) {
      if (this.itemsDropdown[i].content === val) {
        this.itemsDropdown[i].selected = true;
        break;
      } else {
        this.itemsDropdown[i].selected = false;
      }
    }
  }

  selectedDropdown(ev) {
    this.selectedDropdownItem = ev.content;
    this.selectOnlyOneValue(this.selectedDropdownItem);
    console.log("selected dropdown", ev);
  }
  onCloseDropdown(ev) {
    console.log("dropdown closed", ev);
  }
  themeDropdown = "dark" || "light" || "dark";
  dropUpDropdown = false;
}
