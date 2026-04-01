import * as vscode from 'vscode';
import { pingGoogle } from './ping';

let statusBarItem: vscode.StatusBarItem;
let pingInterval: NodeJS.Timeout | undefined;

// This method is called when your extension is activated
export async function activate(context: vscode.ExtensionContext) {
    const myCommandId = 'network-ping.check';

    // Register the command so clicking the status bar item works
    context.subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
        vscode.window.showInformationMessage('Checking network connection...');
        updateNetworkStatus();
    }));

    // Create the status bar item aligned to the right, with priority 100
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = myCommandId;
    context.subscriptions.push(statusBarItem);

    // Initial check and display
    await updateNetworkStatus();
    statusBarItem.show();

    // Check every 30 seconds
    const intervalMs = 30 * 1000;
    pingInterval = setInterval(() => {
        updateNetworkStatus();
    }, intervalMs);
}

// Function that updates the status bar
async function updateNetworkStatus() {
    // Show a loading/checking state
    statusBarItem.text = `$(sync~spin) Google Check`;
    
    // Perform HEAD request
    const isOnline = await pingGoogle();
    
    if (isOnline) {
        // Connected: Green icon
        statusBarItem.text = `$(globe) Google`;
        statusBarItem.color = new vscode.ThemeColor('testing.iconPassed');
        statusBarItem.tooltip = `Google is accessible. Click to refresh.`;
    } else {
        // Disconnected: Red icon
        statusBarItem.text = `$(bracket-error) Google`;
        statusBarItem.color = new vscode.ThemeColor('testing.iconFailed');
        statusBarItem.tooltip = `Google is unreachable. Click to refresh.`;
    }
}

// This method is called when your extension is deactivated
export function deactivate() {
    if (pingInterval) {
        clearInterval(pingInterval);
    }
}
