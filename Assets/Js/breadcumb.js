function renderBreadcrumbTemplate(templateId) {
    const template = document.getElementById(templateId); // Find the template by its ID
    const breadcrumbContainer = document.getElementById("breadcrumb-container"); // Placeholder div
    if (template && breadcrumbContainer) {
      breadcrumbContainer.innerHTML = template.innerHTML; // Inject the template content
      console.log(`Breadcrumb "${templateId}" rendered successfully.`);
    } else {
      console.error(`Template or breadcrumb container not found.`);
    }
  }
  