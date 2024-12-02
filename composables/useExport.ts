import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'

export function useExport() {
  const exportToExcel = <T>(data: T[], filename: string, headers?: Record<keyof T, string>) => {
    // 如果提供了headers，转换数据的键名
    const exportData = headers
      ? data.map(item => {
          const newItem: Record<string, any> = {}
          Object.keys(headers).forEach(key => {
            newItem[headers[key as keyof T]] = item[key as keyof T]
          })
          return newItem
        })
      : data

    const ws = XLSX.utils.json_to_sheet(exportData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    saveAs(blob, `${filename}.xlsx`)
  }

  const exportToCsv = <T>(data: T[], filename: string, headers?: Record<keyof T, string>) => {
    const exportData = headers
      ? data.map(item => {
          const newItem: Record<string, any> = {}
          Object.keys(headers).forEach(key => {
            newItem[headers[key as keyof T]] = item[key as keyof T]
          })
          return newItem
        })
      : data

    const ws = XLSX.utils.json_to_sheet(exportData)
    const csv = XLSX.utils.sheet_to_csv(ws)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    saveAs(blob, `${filename}.csv`)
  }

  return {
    exportToExcel,
    exportToCsv
  }
}
