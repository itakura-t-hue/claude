# 日次同期スクリプト（タスクスケジューラから毎日実行）

$ErrorActionPreference = "Continue"
$env:PYTHONIOENCODING = "utf-8"
# ★ 環境に合わせてPythonパスを修正
$PYTHON = "C:\Users\{ユーザー名}\AppData\Local\Programs\Python\Python312\python.exe"
$SCRIPT_DIR = $PSScriptRoot
$LOG_DIR = Join-Path $SCRIPT_DIR "logs"
$LOG_FILE = Join-Path $LOG_DIR "daily_sync.log"

if (-not (Test-Path $LOG_DIR)) { New-Item -ItemType Directory -Path $LOG_DIR | Out-Null }

function Add-Log($message) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $line = "[$timestamp] $message"
    Add-Content -Path $LOG_FILE -Value $line -Encoding UTF8
}

Set-Location $SCRIPT_DIR

Add-Log "=== daily sync start ==="

Add-Log "CV user journey start"
$out = & $PYTHON "07_cv_user_journey_to_sheets.py" 2>&1 | Out-String
Add-Content -Path $LOG_FILE -Value $out -Encoding UTF8

Add-Log "=== daily sync complete ==="
Add-Content -Path $LOG_FILE -Value "" -Encoding UTF8
