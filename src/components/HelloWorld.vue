<template>
  <div>
    <vscode-button>VS Code style button</vscode-button>
  </div>
</template>

<script setup lang="ts">
import {
  provideVSCodeDesignSystem,
  vsCodeButton,
} from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(vsCodeButton());
</script>
