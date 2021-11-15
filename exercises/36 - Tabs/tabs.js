const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

function handleTabClick(event) {
  // Hide all tab tabPanels
  tabPanels.forEach(function (panel) {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    // tab.ariaSelected = false;
    tab.setAttribute("aria-selected", false);
  });
  // marked clicked tab as selected
  event.currentTarget.setAttribute("aria-selected", true);
  // find the associated tabpanel and show it
  const { id } = event.currentTarget;

  // Method 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
  // tabPanel.hidden = false;

  // Method 2 - find
  const tabPanel = Array.from(tabPanels).find((panel) => {
    return panel.getAttribute("aria-labelledby") === id;
  });
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
