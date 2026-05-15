import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    
        let responseText = "{\n  \"nome\": \"Kisame\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 28,\n  \"altura\": 1.80,\n  \"peso\": 74,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"3 ovos mexidos\",\n        \"2 fatias de pao integral\",\n        \"1 banana prata\",\n        \"30g de aveia em flocos\"\n      ]\n    },\n    {\n      \"horario\": \"11:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"1 maca\",\n        \"20g de castanhas do para\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"200g de arroz branco\",\n        \"100g de feijao preto\",\n        \"150g de peito de frango grelhado\",\n        \"Salada de alface e tomate\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"200g de iogurte natural desnatado\",\n        \"15g de pasta de amendoim\",\n        \"30g de granola sem acucar\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"200g de macarrao integral\",\n        \"150g de carne moida patinho\",\n        \"1 colher de sopa de azeite de oliva\",\n        \"Brocolis cozido\"\n      ]\n    },\n    {\n      \"horario\": \"22:00\",\n      \"nome\": \"Ceia\",\n      \"alimentos\": [\n        \"250ml de leite desnatado\",\n        \"30g de albumina ou caseina\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"Multivitaminico\"\n  ]\n}"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '')

            let jsonObject = JSON.parse(jsonString)

            return reply.send({data: jsonObject})

        }catch(err) {
            console.log(err);   
        }

        reply.send({ok: true})
 
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}