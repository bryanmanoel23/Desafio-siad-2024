import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Cadastrado!</AlertTitle>
      <AlertDescription>
        Cadastro realizado com sucesso!
      </AlertDescription>
    </Alert>
  )
}

export function AlertDestructive() {
  return (
    <Alert variant="destructive" className="border-red-700">
      <AlertCircle className="h-4 w-4 text-red-700" />
      <AlertTitle className="text-red-700">Error</AlertTitle>
      <AlertDescription  className="text-red-700">
      E1- Dados do formulário Inválido
      </AlertDescription>
    </Alert>
  )
}

export function Alertemailjacadastrado() {
    return (
      <Alert variant="destructive" className="border-red-700">
        <AlertCircle className="h-4 w-4 text-red-700" />
        <AlertTitle className="text-red-700">Error</AlertTitle>
        <AlertDescription  className="text-red-700">
        E-mail já existe
        </AlertDescription>
      </Alert>
    )
  }
  
  export function Alertemailsucess() {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Cadastrado!</AlertTitle>
        <AlertDescription>
        Não há pessoas cadastradas com o e-mail informado!
        </AlertDescription>
      </Alert>
    )
  }