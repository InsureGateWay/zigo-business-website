Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$width = 1200
$height = 630
$canvas = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$background = [System.Drawing.Color]::FromArgb(250, 247, 242)
$brown = [System.Drawing.Color]::FromArgb(95, 66, 31)
$gold = [System.Drawing.Color]::FromArgb(236, 213, 171)
$muted = [System.Drawing.Color]::FromArgb(92, 84, 75)
$graphics.Clear($background)

$accentBrush = New-Object System.Drawing.SolidBrush $gold
$graphics.FillEllipse($accentBrush, 900, -190, 470, 470)
$graphics.FillEllipse($accentBrush, -210, 470, 330, 330)
$accentBrush.Dispose()

$logo = [System.Drawing.Image]::FromFile((Join-Path $root 'public\zigo-business-solutions-logo.png'))
$logoRatio = $logo.Width / $logo.Height
$logoWidth = 345
$logoHeight = [int]($logoWidth / $logoRatio)
$graphics.DrawImage($logo, 74, 60, $logoWidth, $logoHeight)
$logo.Dispose()

$eyebrowFont = New-Object System.Drawing.Font 'Arial', 15, ([System.Drawing.FontStyle]::Bold)
$headlineFont = New-Object System.Drawing.Font 'Arial', 42, ([System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font 'Arial', 20, ([System.Drawing.FontStyle]::Regular)
$eyebrowBrush = New-Object System.Drawing.SolidBrush $brown
$headlineBrush = New-Object System.Drawing.SolidBrush $brown
$bodyBrush = New-Object System.Drawing.SolidBrush $muted

$graphics.DrawString('ENTERPRISE AI & DATA DELIVERY', $eyebrowFont, $eyebrowBrush, 78, 215)
$graphics.DrawString('From business challenge', $headlineFont, $headlineBrush, 78, 260)
$graphics.DrawString('to working technology.', $headlineFont, $headlineBrush, 78, 316)
$graphics.DrawString('AI, data, cloud and software solutions designed, built', $bodyFont, $bodyBrush, 78, 440)
$graphics.DrawString('and supported around the way your organisation works.', $bodyFont, $bodyBrush, 78, 470)

$linePen = New-Object System.Drawing.Pen $brown, 4
$graphics.DrawLine($linePen, 78, 545, 280, 545)

$linePen.Dispose()
$eyebrowFont.Dispose()
$headlineFont.Dispose()
$bodyFont.Dispose()
$eyebrowBrush.Dispose()
$headlineBrush.Dispose()
$bodyBrush.Dispose()
$graphics.Dispose()

$canvas.Save((Join-Path $root 'public\zigo-social-preview.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$canvas.Dispose()
